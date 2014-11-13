package br.com.ipnet.projeto.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.ipnet.projeto.beans.Onibus;

import com.google.gson.Gson;
import com.googlecode.objectify.ObjectifyService;

@Repository
public class OnibusDAO extends DAO<Onibus> {
	
	static{
		ObjectifyService.register(Onibus.class);
	}

	public OnibusDAO() {
		super(Onibus.class);		
	}
	private static final long serialVersionUID = 1L;
	
	
	public List<Onibus> getByGrupo(String grupo){
		return ObjectifyService.begin().query(Onibus.class).filter("grupo", grupo).filter("isAtivo", Boolean.TRUE).list();
	}
	
	
	public Onibus  getByImei(String imei){
		return  ObjectifyService.begin().query(Onibus.class).filter("imei", imei).get();
		
		
	}



public static void main(String[] args) {
		
		Onibus onibus = new Onibus();
		onibus.setGrupo("grupo 1");
		onibus.setHashPush("pushhhhzdjgpdgf");
		onibus.setImei("testeimei");
		onibus.setIsAtivo(true);
		onibus.setLatitude("lat");
		onibus.setLongitude("long");
		onibus.setPlaca("placa");
		System.out.println(new Gson().toJson(onibus));
		
	}
	
//-22.891654,-43.593646
//-22.890033,-43.60062
//-22.88861,-43.596028
//-22.883391,-43.579999
//-22.895548,-43.561889
//-22.887859,-43.591887
	
}