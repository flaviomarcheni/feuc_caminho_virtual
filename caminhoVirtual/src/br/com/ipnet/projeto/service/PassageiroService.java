package br.com.ipnet.projeto.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.ipnet.projeto.beans.Onibus;
import br.com.ipnet.projeto.beans.Passageiro;
import br.com.ipnet.projeto.beans.Retorno;
import br.com.ipnet.projeto.dao.passageiroDAO;
import br.com.ipnet.projeto.util.MapUtil;

@Component
public class PassageiroService {

	@Autowired
	private passageiroDAO passageiroDAO;
	
	public PassageiroService() {
	}
	
	public Retorno<Passageiro> cadastraOuAltualizaPassageiro(Passageiro passageiro) {
		Retorno<Passageiro> retorno = new Retorno<Passageiro>();
		try {
			Passageiro p = passageiroDAO.getByImei(passageiro.getImei());
			if(p!=null && p.getId() != null){
				passageiro.setId(p.getId());
				retorno.setMensagem("Passageiro atualizado com sucesso.");
			}else{
				retorno.setMensagem("Passageiro salvo com sucesso.");
			}
			passageiroDAO.put(passageiro);
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setError("Erro ao persistir Passageiro : "+ e.getMessage());
		}
		return retorno;
	}

	public Retorno<Passageiro> buscaPassageiroPorLatLongEGrupo(Onibus onibus) {
		 Retorno<Passageiro> retorno = new Retorno<Passageiro>();
		try {
			List<Passageiro> list = passageiroDAO.getByGrupo(onibus);					
			List<Passageiro> passageiros = new ArrayList<Passageiro>();
			Double latitude = Double.parseDouble(onibus.getLatitude());
			Double longitude = Double.parseDouble(onibus.getLongitude());
			if(list!=null)
					for (Passageiro p:list) {
						Double distancia = MapUtil.distancia(latitude, longitude, Double.parseDouble(p.getLatitude()), Double.parseDouble(p.getLongitude()));
						if(distancia<=200){
							p.setDistancia(distancia+"");
							passageiros.add(p);
						}
						System.out.println(p.getDistancia());
					}
			retorno.setMensagem("Busca realizada com sucesso. "+passageiros.size());
			retorno.setListaObjeto(passageiros);
		} catch (Exception e) {
			retorno.setError(e.getMessage());
		}
		return retorno;	
	}
	
	
}


