package br.com.ipnet.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.ipnet.projeto.beans.Retorno;
import br.com.ipnet.projeto.beans.Onibus;
import br.com.ipnet.projeto.dao.OnibusDAO;

@Component
public class OnibusService {

	@Autowired
	private OnibusDAO onibusDAO;
	
	public OnibusService() {
	}
	
	public Retorno<Onibus>  buscaOnibusPorGrupo(String grupo){
		Retorno<Onibus> retorno = new Retorno<Onibus>();
		try {
			retorno.setListaObjeto(onibusDAO.getByGrupo(grupo));
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setError(e.getMessage());
		}
		return retorno;
		
	}
	public Retorno<Onibus> cadastraOuAltualizaOnibus(Onibus onibus) {

		Retorno<Onibus> retorno = new Retorno<Onibus>();
		try {
			Onibus u = onibusDAO.getByImei(onibus.getImei());
				
			if(u!=null && u.getId() != null){
				onibus.setId(u.getId());
				retorno.setMensagem("Ônibus  atualizado com sucesso.");
			}else{
				retorno.setMensagem("Ônibus salvo com sucesso.");
			}
			onibusDAO.put(onibus);
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setError("Erro ao persistir Ônibus : "+ e.getMessage());
		}
		return retorno;
	}
	public Retorno<Onibus> altualizaOnibus(String emei, Boolean status) {
		Retorno<Onibus> retorno = new Retorno<Onibus>();
		try {
			Onibus u = onibusDAO.getByImei(emei);
				
			if(u!=null && u.getId() != null){
				u.setIsAtivo(status);
				onibusDAO.put(u);
				String msg = (status)?"Ativado":"Desativado";
				retorno.setMensagem("Ônibus "+msg+" com sucesso.");
			}else{
				retorno.setMensagem("Não foi possivel encontrar o Ônibus com o imei: "+emei);
			}
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setError("Erro ao persistir Ônibus: "+ e.getMessage());
		}
		return retorno;
	}
	public Retorno<Onibus> altualizaLatLng(Onibus onibus) {
		Retorno<Onibus> retorno = new Retorno<Onibus>();
		try {
			Onibus u = onibusDAO.getByImei(onibus.getImei());
				
			if(u!=null && u.getId() != null){
				u.setLatitude(onibus.getLatitude());
				u.setLongitude(onibus.getLongitude());
				onibusDAO.put(u);
				retorno.setMensagem("Posicão  atualizada com sucesso.");
			}else{
				retorno.setMensagem("Não foi possivel encontrar o Ônibus com o imei: "+onibus.getImei());
			}
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setError("Erro ao atualizar  a posição: "+ e.getMessage());
		}
		return retorno;
	}
}


