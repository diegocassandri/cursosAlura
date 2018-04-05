angular.module('alurapic').controller('FotoController',function($scope,recursoFoto,cadastroDeFotos,$routeParams){
    $scope.foto = {};
    $scope.mensagem = '';

    

    if($routeParams.fotoId){
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto; 
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'
        });
    }

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
                
            })
            .catch(function(erro) {
                $scope.mensagem = erro.mensagem;
            });
        }
    };

});

/* 
 $http.put('v1/fotos/' + $scope.foto._id,$scope.foto)
                .success(function(){
                $scope.mensagem = "Foto alterada com sucesso!";
                })
               .error(function(erro){
                $scope.mensagem = "Erro ao alterar foto!";
                });

 $http.post('v1/fotos',$scope.foto)
                .success(function(){
                $scope.mensagem = "Foto incluída com sucesso!";
                $scope.foto = {};
                })
               .error(function(erro){
                $scope.mensagem = "Erro ao incluir foto!";
                });

*/