package br.com.ipnet.projeto.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.ipnet.projeto.beans.Onibus;
import br.com.ipnet.projeto.beans.Passageiro;

import com.googlecode.objectify.ObjectifyService;

@Repository
public class passageiroDAO extends DAO<Passageiro> {
	
	static{
		ObjectifyService.register(Passageiro.class);
	}

	public passageiroDAO() {
		super(Passageiro.class);		
	}
	private static final long serialVersionUID = 1L;
	
	
	public List<Passageiro> getByGrupo(Onibus onibus){
		return ObjectifyService.begin().query(Passageiro.class).filter("grupo", onibus.getGrupo()).filter("ativo", Boolean.TRUE).list();
	}
	
	
	public Passageiro  getByImei(String imei){
		return  ObjectifyService.begin().query(Passageiro.class).filter("imei", imei).get();
		
	}
	
}