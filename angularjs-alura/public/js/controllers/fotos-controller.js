angular.module('alurapic').controller('FotosController', function($scope,recursoFoto){
    $scope.fotos = [ ];
    $scope.filtro = '';
    $scope.mensagem = '';


    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    },function(erro){
        console.log(errro)
    });

    /*$http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    });*/


    $scope.remover = function(foto){
        
        recursoFoto.delete({fotoId: foto._id},function(){
            $scope.mensagem = "Foto removida com sucesso!";
                var indiceFoto = $scope.fotos.indexOf(foto); 
                $scope.fotos.splice(indiceFoto,1); 
                console.log("Foto " + foto.titulo + " removida com sucesso!");
        },function(erro){
            console.log(errro);
            $scope.mensagem = "Erro ao remover foto! " + foto.titulo;
        });

       /* $http.delete('v1/fotos/' + foto._id)
            .success(function(){
                $scope.mensagem = "Foto removida com sucesso!";
                var indiceFoto = $scope.fotos.indexOf(foto); 
                $scope.fotos.splice(indiceFoto,1); 
                console.log("Foto" + foto.titulo + "removida com sucesso!");
            })
            .error(function(erro){
                $scope.mensagem = "Erro ao remover foto! " + foto.titulo;
            });*/
    };
});