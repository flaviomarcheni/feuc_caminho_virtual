<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Auth</title>
</head>
<body>

		<div style="color: red">	${erro}</div>
	<form id="formLogin" method="post" action="/auth/login">
		<table>

			<tr>
				<td><label for="usuario">Usuário:</label></td>
				<td><input type="text" id="usuario" name="login" /></td>
			</tr>

			<tr>
				<td><label for="senha">Senha:</label></td>
				<td><input type="password" id="senha" name="senha" /></td>
			</tr>

		</table>

		<button>Acessar</button>
	</form>

</body>
</html>


