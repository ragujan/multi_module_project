<?php

namespace App\Models;

use CodeIgniter\Model;


class CommonInstituteModel extends Model
{
    protected $table = 'common_institute_division';
    protected $allowedFields = ['division_name', 'created_at', 'created_by', 'updated_at', 'updated_by'];


    public function nameExists($name)
    {
        return $this->where('division_name', $name)->countAllResults() > 0;
    }
    public function getAllRows()
    {
        return $this->findAll();
    }
}
