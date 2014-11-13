package br.com.ipnet.projeto.util;

public class MapUtil {

	public static Double distancia(double lat1, double lon1, double lat2, double lon2) {
		double theta = lon1 - lon2;
		double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2))
				+ Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))
				* Math.cos(deg2rad(theta));
		dist = Math.acos(dist);
		dist = rad2deg(dist);
		dist = dist * 60 * 1.1515;
		dist = dist * 1.609344;
		double distancia = (dist * 1000);
		return distancia;
	}

	// Esta função converte graus decimais para radianos
	private static double deg2rad(double deg) {
		return (deg * Math.PI / 180.0);
	}

	// Esta função converte os radianos em graus decimais
	private static double rad2deg(double rad) {
		return (rad * 180.0 / Math.PI);
	}
}
