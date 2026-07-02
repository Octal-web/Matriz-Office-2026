<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" style="margin: 0;padding: 0;">
	<head>
		<title>Matriz Office</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	</head>
	<body style="margin: 0; padding: 0;">
		<table style="min-width:100%" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
			<tbody>
				<tr>
					<td valign="top">
						<span><font color="#888888"></font></span>
						<table style="min-width:100%" width="100%" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td>
										<table style="min-width:100%" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
											<tbody>
												<tr>
													<td>&nbsp;</td>
												</tr>
												<tr>
													<td style="padding-top:10px;padding-bottom:20px" align="center" valign="middle">
														<img src="{{ asset('/site/img/logo-black.png') }}" width="125" height="auto">
													</td>
												</tr>
												<tr>
													<td height="40" align="center" valign="top">
														<table width="602" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="border-left: 1px solid #000; border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 0px solid transparent;">
															<tbody>
																<tr>
																	<td height="40">&nbsp;</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<td>
										<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#000">
											<tbody>
												<tr>
													<td style="text-align:center" valign="top">
														<table style="margin:0 auto" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
															<tbody>
																<tr>
																	<td style="text-align:left" valign="top">
																		<table width="100%" cellspacing="0" cellpadding="0" border="0">
																			<tbody>
																				<tr>
																					<td width="30">&nbsp;</td>
																					<td width="540">
																						<table width="100%" cellspacing="0" cellpadding="0" border="0">
																							<tbody>
																								<tr>
																									<td valign="top">
																										<h3 style="margin:0px 0px 20px 0px;padding:0px;color:#4a2f25;font-style:normal;font-size:25px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:40px;text-decoration:none;text-transform:none;display:block;text-align:center;">Um novo contato se cadastrou através da landing page</h3>

																										<p style="margin:0;padding:0px;color:#4a2f25;font-style:normal;font-size:16px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:27px;text-decoration:none;text-transform:none;display:block;">Nome: {{ $nome }}</p>
																										<p style="margin:0;padding:0px;color:#4a2f25;font-style:normal;font-size:16px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:27px;text-decoration:none;text-transform:none;display:block;">Telefone: {{ $telefone }}</p>
																										@if(!empty($email))
																										<p style="margin:0;padding:0px;color:#4a2f25;font-style:normal;font-size:16px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:27px;text-decoration:none;text-transform:none;display:block;">E-mail: {{ $email }}</p>
																										@endif
																										<p style="margin:0;padding:0px;color:#4a2f25;font-style:normal;font-size:16px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:27px;text-decoration:none;text-transform:none;display:block;">Cidade: {{ $cidade }}</p>
																										{{-- <p style="margin:0;padding:0px;color:#4a2f25;font-style:normal;font-size:16px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:27px;text-decoration:none;text-transform:none;display:block;">Mensagem: {{ $mensagem }}</p> --}}
																										@if($newsletter == 1)
																											<p style="margin:0px 0px;padding:0px;color:#4a2f25;font-style:normal;font-size:16px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:27px;text-decoration:none;text-transform:none;display:block;">Receber newsletter: Sim</p>
																										@else
																											<p style="margin:0px 0px;padding:0px;color:#4a2f25;font-style:normal;font-size:16px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:27px;text-decoration:none;text-transform:none;display:block;">Receber newsletter: Não</p>
																										@endif
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																					<td width="30">&nbsp;</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<td align="center" valign="top">
										<table width="602" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
											<tbody>
												<tr>
													<td align="center" valign="top">
														<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="border-left: 1px solid #000; border-bottom: 1px solid #000; border-right: 1px solid #000; border-top: 0px solid transparent;">
															<tbody>
																<tr>
																	<td height="40">&nbsp;</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td align="center" valign="top">
														<table align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
															<tbody>
																<tr>
																	<td align="center" width="30">&nbsp;</td>
																	<td width="540">
																		<table align="center" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
																			<tbody>
																				<tr>
																					<td style="border-bottom:1px solid #000;border-top:0">
																						<table width="100%" cellspacing="0" cellpadding="0" border="0">
																							<tbody>
																								<tr>
																									<td style="padding:35px 0" align="center" width="30%" valign="middle" rowspan="2">
																										{{-- <table cellspacing="0" cellpadding="0" border="0">
																											<tbody>
																												<tr>
																													<td align="left" width="50">
																														<a href="https://www.facebook.com/" title="Facebook" style="margin:0px;border-top-width:0px;border-right-width:0px;border-left-width:0px;border-bottom-width:0px;border-color:#000;border-style:none;border-bottom-style:none;padding:0px;float:none;color:#000;font-style:normal;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:11px;font-weight:400;line-height:normal;text-decoration:underline;text-transform:none;display:block;white-space:normal" target="_blank">
																															<img src="{{ asset('/site/img/facebook.png') }}" width="auto" height="25">
																														</a>
																													</td>
																													<td align="left" width="50">
																														<a href="https://www.instagram.com/" title="Youtube" style="margin:0px;border-top-width:0px;border-right-width:0px;border-left-width:0px;border-bottom-width:0px;border-color:#000;border-style:none;border-bottom-style:none;padding:0px;float:none;color:#000;font-style:normal;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:11px;font-weight:400;line-height:normal;text-decoration:underline;text-transform:none;display:block;white-space:normal" target="_blank">
																															<img src="{{ asset('/site/img/instagram.png') }}" width="auto" height="25">
																														</a>
																													</td>
																												</tr>
																											</tbody>
																										</table> --}}
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																	<td align="center" width="30">&nbsp;</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top:20px;padding-bottom:20px" align="center" valign="middle">
														<img src="{{ asset('/site/img/logo-black.png') }}" width="70" height="auto">
													</td>
												</tr>
												<tr>
													<td style="padding-bottom:40px" align="center" width="540" valign="middle">
														<table align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
															<tbody>
																<tr>
																	<td align="center" width="30">&nbsp;</td>
																	<td align="left" width="540" valign="top">
																		<p style="margin:0px;padding:0px;color:#4a2f25;font-style:normal;font-size:11px;font-family:'Inter',Helvetica,Arial,sans-serif;font-weight:400;line-height:17px;text-decoration:none;text-transform:none;display:block;text-align:-webkit-center;text-align:center;">Você está recebendo este conteúdo em seu e-mail pois seu e-mail está cadastrado no site <a href="{{ url()->to('/') }}" target="_blank" style="font-weight:bold;margin:0px;border-top-width:0px;border-right-width:0px;border-left-width:0px;border-bottom-width:0px;border-style:none;border-bottom-style:none;padding:0px;float:none;color:#4a2f25;font-style:normal;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:11px;font-weight:bold;line-height:17px;text-transform:none;display:inline;white-space:normal;text-decoration:underline;">{{ url()->to('/') }}</a>.</p>
																	</td>
																	<td align="center" width="30">&nbsp;</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>