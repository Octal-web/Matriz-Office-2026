<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PoliticasController extends Controller
{
    public function privacidade() {
        $texto = '
            <h1>Política de Privacidade</h1>

            <p><b>A MATRIZ OFFICE</b> informa que a presente política de privacidade objetiva regular os dados coletados dos usuários em seu website e a sua utilização, dentro da maior transparência possível. Os dados coletados neste website são apenas os estritamente necessários para as finalidades às quais se destinam. Usando este website, o usuário concorda com a coleta e com o uso de suas informações pessoais, conforme especificado neste documento.</p>

            <h2>I. Objeto da Política de Privacidade</h2>

            <p>A presente política de privacidade aplica-se às informações contidas e obtidas no site <a href="https://www.matrizoffice.com">www.matrizoffice.com</a> tem por objetivo garantir os princípios de confidencialidade e integridade dos dados coletados durante a visita ao site mencionado.</p>

            <h2>II. Advertência ao titular de dados pessoais</h2>

            <p>Caso o usuário do presente website, na condição de titular de dados pessoais, não esteja de acordo com nossa política de privacidade, poderá, a qualquer momento, descontinuar o seu acesso, observando-se, neste caso, que poderá ter acesso limitado a algumas funcionalidades do site.</p>

            <p>Entende-se por “dado pessoal” todo dado através do qual alguém é identificado, nos termos do previsto no art. 5º, inciso I, da Lei nº 13.709/18.</p>

            <p>O uso e tratamento de dados pessoais compreende: coleta, recepção, produção, acesso, classificação, reprodução, transmissão, utilização, distribuição, processamento, arquivamento, armazenamento, eliminação, modificação, comunicação, conforme o art. 5º, inciso X, da Lei nº 13.709/18.</p>

            <h2>III. Utilização dos Dados</h2>

            <p>A Matriz Office poderá utilizar os seguintes dados pessoais colhidos durante a navegação do usuário:</p>

            <p>(1) Dados pessoais fornecidos pelo usuário/titular: no momento que este preenche os campos de identificação contidos no website <a href="https://www.matrizoffice.com">www.matrizoffice.com</a>.</p>

            <p>(2) Dados pessoais obtidos durante a navegação, que poderá ocorrer no website através de cookies. Com a finalidade específica de melhorar e facilitar o uso pelo usuário.</p>

            <p>(3) Dados pessoais fornecidos pelo usuário/titular, voluntariamente, através de correio eletrônico, no acesso “Contato” e “Trabalhe Conosco” (https://...), que indicam e-mail para envio de informações, solicitações ou apresentação de currículos e similares.</p>

            <p>Os dados coletados no website oficial www.matrizoffice.com poderão ser compartilhados com a Meta e Google.</p>

            <h2>IV. Sobre o Encarregado de Dados</h2>

            <p>Conforme dispõe o art. 41 da Lei nº 13.709/18, Matriz Office informa que o encarregado de dados pessoais é a pessoa física Guilherme Possamai e o email para contato é o <a href="mailto:ti.guilherme@matrizoffice.com">ti.guilherme@matrizoffice.com</a>.</p>

            <h2>V. Bases Legais para o tratamento de dados Pessoais</h2>

            <p>Todas as operações de tratamento de dados pessoais feita pela Matriz Office é vinculada a uma base legal constituída e a ela corresponde, dentro dos seus limites.</p>

            <h2>VI. Sobre o endereço IP</h2>

            <p>O endereço IP é um número utilizado pelos computadores na internet para identificar o seu computador como único em um dado momento. Nossos servidores web, automaticamente, coletam seu endereço IP como “dados de tráfego” e estes não serão utilizados para qualquer outra finalidade.</p>

            <h2>VII. Utilização dos Cookies</h2>

            <p>Um cookie é um pequeno arquivo de dados que é enviado para o seu computador quando você visita um website. Nossos cookies objetivam otimizar a sua experiência de navegação e as campanhas de tráfego e incluem um número de identificação que é exclusivo para o computador que você está usando.</p>

            <p>A qualquer momento, o usuário poderá revogar seu consentimento quanto à utilização de cookies. Alertamos, entretanto, que algumas características deste website podem ser limitadas em caso de bloqueio de cookies.</p>

            <h2>VIII. Objetivo do Tratamento de Dados</h2>

            <p>Os dados e as informações coletadas serão utilizadas para fins publicitários ou comerciais, mediante o consentimento ou solicitação do próprio Titular de Dados, em conformidade com o inciso I do artigo 7º da Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD).</p>

            <h2>IX. Segurança dos Dados</h2>

            <p>Todas as informações que coletamos são armazenadas em ambientes operacionais seguros, não disponíveis ao acesso público com privacidade e segurança.</p>

            <h2>X. Confidencialidade</h2>

            <p>As informações pessoais inseridas no website <a href="https://www.matrizoffice.com">www.matrizoffice.com</a> ou nos e-mails que por ele trafegarem poderão ser compartilhadas com a Meta e Google.</p>

            <h2>XI. Retenção das Informações Coletadas</h2>

            <p>As informações coletadas pela Matriz Office através da página serão excluídas de seus servidores quando deixarem de ser úteis para os fins para os quais foram coletadas, ou por solicitação do usuário, salvo obrigação legal ou regulatória em contrário.</p>

            <h2>XII. Direito do Usuário</h2>

            <p>Em cumprimento aos artigos 17 a 22 da Lei nº 13.709/2018, a Matriz Office garante ao usuário a possibilidade de apresentação de solicitações baseadas nos direitos do titular de dados pessoais, conforme abaixo:</p>

            <p>1 – Direito à confirmação da existência de tratamento e a finalidade do tratamento, observados os segredos comercial e industrial;</p>

            <p>2 – Correção de dados incompletos, inexatos ou desatualizados;</p>

            <p>3 – Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</p>

            <p>4 – Acesso aos seus dados;</p>

            <p>5 – Portabilidade de seus dados a outro fornecedor de serviço ou produto, mediante requisição expressa pelo Usuário, observados os segredos comercial e industrial, conforme §7º, art. 18, da Lei nº 13.709/2018;</p>

            <p>6 – Eliminação dos dados tratados com consentimento do Usuário, exceto em necessária manutenção em cumprimento de obrigação legal, nos termos dos incisos do art. 16 da Lei nº 13.709/2018;</p>

            <p>7 – Obtenção de informação sobre a possibilidade de não fornecer o seu consentimento, bem como de ser informado sobre as consequências, em caso de negativa;</p>

            <p>8 – Revogação do consentimento, a qualquer tempo, em relação a todos os dados pessoais tratados ou parte deles.</p>

            <p>A Matriz Office, mesmo em caso de requisição de exclusão, respeitará o prazo de armazenamento mínimo de informações de usuários de Internet, conforme determinado pela legislação brasileira.</p>

            <h2>XIII. Sobre esta Política de Privacidade</h2>

            <p>A Matriz Office poderá alterar e/ou atualizar esta política a qualquer tempo, mediante aviso no website.</p>

            <h2>XIV. Legislação e Foro</h2>

            <p>Esta Política está em conformidade com a legislação brasileira, especialmente, com a Lei nº 13.709/2018, sendo competente o foro de Garibaldi/RS para dirimir qualquer dúvida decorrente deste documento.</p>

            <p>Documento atualizado em 12 de maio de 2023.</p>
        ';

        return Inertia::render('PoliticaPrivacidade', [
            'texto' => $texto
        ]);
    }
};