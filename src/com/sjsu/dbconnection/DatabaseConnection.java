package com.sjsu.dbconnection;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection {
	public Connection getConnection() throws Exception {
		try {
			String connectionURL = "jdbc:mysql://sensorcloud.c6ypgmob2jsr.us-west-2.rds.amazonaws.com:3306/airqualitydb";
			Connection connection = null;
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			connection = DriverManager.getConnection(connectionURL,
					"airqualityd", "airqualityd");
			return connection;
		} catch (Exception e) {
			throw e;
		}
	}


}
