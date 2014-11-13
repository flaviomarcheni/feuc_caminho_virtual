package br.com.ipnet.projeto.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class Connection {
	private HttpURLConnection connection;
	private URL url;

	public void toPost(String request, String url) throws IOException, MalformedURLException{		
		this.url = new URL(url); 
		System.out.println(url);
		connection = (HttpURLConnection) this.url.openConnection();		
		connection.setUseCaches (false);		
		connection.setRequestProperty("Request-Method", "POST");		
		connection.setRequestMethod("POST");		
		connection.setDoInput(true);  //recebimento de dados
		connection.setDoOutput(true);  //envio de dados		 
		connection.setRequestProperty("Content-Type", "application/json");		//setando o content type
		connection.setRequestProperty("Content-Length", String.valueOf(request.getBytes().length));//setando o tamanho dos daos enviados
		connection.setRequestProperty("Accept-Charset", "UTF-8");//setando o encoding
		connection.getOutputStream().write(request.getBytes());//escrevendo dados
		connection.getOutputStream().flush();
		connection.getOutputStream().close();		
				
		connection.connect();  // conecta com a url destino  
		
		resultRequest();// caso haja resualtado do retorno imprime no console
	}	
	
	public void resultRequest() throws IOException{	
		BufferedReader br = null;
		if(connection != null)
			if(connection.getErrorStream() == null)
				br = new BufferedReader(new InputStreamReader(connection.getInputStream())); 
			else
				br = new BufferedReader(new InputStreamReader(connection.getErrorStream()));
		  
		StringBuffer newData = new StringBuffer();  
		String s = "";  
		while (null != ((s = br.readLine()))) {  
		    newData.append(s);  
		}  
		br.close();  
		
	//	System.out.println(new String(newData));  // imprime o codigo resultante  
//		System.out.println("Cron Sas Parp executado com sucesso!");
		System.out.println("Resultado: "+ connection.getResponseCode()+ "/"+ connection.getResponseMessage()); // imprime o numero do resultado  
	}
}
