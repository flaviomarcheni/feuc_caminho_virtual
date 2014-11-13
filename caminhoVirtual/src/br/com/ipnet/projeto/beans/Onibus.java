package br.com.ipnet.projeto.beans;

import java.io.Serializable;
import javax.persistence.Id;

public class Onibus implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private Long id;
	private String imei;
	private String placa;
	private String grupo;
	private String hashPush;
	private String latitude;
	private String longitude;
	public Boolean isAtivo;
	

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", imei=" + imei + ", placa=" + placa
				+ ", grupo=" + grupo + ", hashPush=" + hashPush + ", latitude="
				+ latitude + ", longitude=" + longitude + ", isAtivo="
				+ isAtivo + "]";
	}

	public Onibus() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImei() {
		return imei;
	}

	public void setImei(String imei) {
		this.imei = imei;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public String getGrupo() {
		return grupo;
	}

	public void setGrupo(String grupo) {
		this.grupo = grupo;
	}

	public String getHashPush() {
		return hashPush;
	}

	public void setHashPush(String hashPush) {
		this.hashPush = hashPush;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public Boolean getIsAtivo() {
		return isAtivo;
	}

	public void setIsAtivo(Boolean isAtivo) {
		this.isAtivo = isAtivo;
	}



	
	
}
