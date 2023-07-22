<?php

namespace App\Controllers;

use App\Models\CommonInstituteModel;
use CodeIgniter\I18n\Time;

class CommonInstitute extends BaseController
{
    public function index()
    {
    }
    public function add()
    {
        date_default_timezone_set("Asia/Calcutta");
        $input_status =  preg_match('/^[a-z]\w{2,23}[^_]$/i', $_POST['name']);

            $model = model(CommonInstituteModel::class);

        if (!$input_status) {
            echo "Invalid input";
            return;
        }else if($model->nameExists($_POST["name"])){
            echo "Name already exists";
            return;
        } else {
            $now = Time::now('Asia/Colombo', 'en_US');
            $formattedTimestamp = $now->format('Y-m-d H:i:s.u');
            $model->save(
                [
                    'division_name' => $_POST['name'],
                    'created_at' => $formattedTimestamp,
                    'created_by' => 'ragjn',
                    'updated_at' => $formattedTimestamp,
                    'updated_by' => 'ragjn',
                ]
            );
            echo "Success";
        }
    }
    public function viewTable(){
        $model = model(CommonInstituteModel::class);
        $row = [
            "rows" => $model->getAllRows()
        ];
        echo json_encode($row);
    }
   
}
