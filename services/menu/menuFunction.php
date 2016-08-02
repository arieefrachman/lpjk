<?php
	require('../db/connection.php');

	function retrievePermission($username){

		$sql = mysql_query("SELECT p.menu_id menuId FROM user u
				INNER JOIN permissions p ON u.group_id = p.groups_id
				INNER JOIN menu m ON p.menu_id = m.id 
				WHERE u.username = '$username'");

		$permissions = [];

		while ($data = mysql_fetch_array($sql)) {
			$permissions[] = $data['menuId'];
		}

		return $permissions;

	}

	
	function retrieveModules($permissions){
		$inClause = '(' . join(',',$permissions) . ')';
		$sql = mysql_query("SELECT id, text, iconCls FROM menu WHERE menu_id IS NULL AND id in $inClause");

		$modules = [];

		while($data = mysql_fetch_assoc($sql)){
			$modules[] = $data;
		}

		return $modules;
	}


	function retrieveMenuOptions($modules, $permissions){
		$inClause = '(' . join(',',$permissions) . ')';
		$result = [];

		foreach($modules as $module){
			$sql = "SELECT * FROM menu WHERE menu_id = ".$module['id']." and id in $inClause";

			if($res = mysql_query($sql)){
				$count = mysql_num_rows($res);
				if ($count > 0){
					$module['items'] = array();

					while ($data = mysql_fetch_assoc($res)) {
						$module['items'][] = $data;
					}
				}

				$result[] = $module;
			}
		}

		return $result;
	}
?>