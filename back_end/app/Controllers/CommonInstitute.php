<?php

namespace App\Controllers;

use App\Models\CommonInstituteModel;
use CodeIgniter\I18n\Time;
use CodeIgniter\Exceptions\PageNotFoundException;

class CommonInstitute extends BaseController
{


    public function index()
    {
    }
    public function add()
    {
        date_default_timezone_set("Asia/Calcutta");
        $input_status =  preg_match('/^^[a-z]\w{2,23}$/i', $_POST['name']);

        $model = model(CommonInstituteModel::class);

        if (!$input_status) {
            echo "Invalid input";
            return;
        } else if ($model->nameExists($_POST["name"])) {
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
    public function viewTable()
    {
        $model = model(CommonInstituteModel::class);
        $row = [
            "rows" => $model->getAllRows()
        ];
        echo json_encode($row);
    }
    public function updateCommonInstitute()
    {
        $updateState = 0;
        $message = "";
        // validations id
        if (preg_match("/^\\d+$/", $_POST["id"]) && preg_match('/^^[a-z]\w{2,23}$/i', $_POST['name'])) {
            $id = $_POST["id"];
            $name = $_POST["name"];

            $model = model(CommonInstituteModel::class);
            if($model->nameExists($_POST["name"])){
                $message = "Name already exists";
            }else{
                $now = Time::now('Asia/Colombo', 'en_US');
                $formattedTimestamp = $now->format('Y-m-d H:i:s.u');
                $data = [
                    "division_name"=>$name,
                    "updated_at"=>$formattedTimestamp,
                    "updated_by"=>"Marshall Rag"
                ];
                $updateState = $model->update($id,$data);
                
            }
        }else{
            $message = "Invalid data";
        }
        if($updateState){
            echo "Success";
        }else{
            echo $message;
        }
        return;
    }
}
