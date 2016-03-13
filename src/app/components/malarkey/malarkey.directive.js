class MalarkeyDirective {
  constructor (malarkey) {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      let watcher;
      let typist = malarkey(el[0], {
        // typeSpeed: 40,
        // deleteSpeed: 40,
        // pauseDelay: 800,
        // loop: true,
        // postfix: ' '
          typeSpeed: 50,
          deleteSpeed: 50,
          pauseDelay: 2000,
          loop: false,
          postfix: ''
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, (value) => {
        typist.type(value).pause();
      });

      watcher = scope.$watch('vm.quotesArray', () => {
        // console.log('Contributors', vm.quotesArray);
        angular.forEach(vm.quotesArray, (quote) => {
          typist.type(quote).pause();
        });
      });

      scope.$on('$destroy', () => {
        watcher();
      });
    }

  }
}

class MalarkeyController {
  constructor ($log) {
    'ngInject';

    this.$log = $log;
    this.contributors = [];
    this.quotesArray = ["Tell me and I forget. Teach me and I remember. Involve me and I learn"];
    // this.activate(quotesArray);
  }

  // activate(quotes) {
  //   return this.getContributors(githubContributor).then(() => {
  //       console.log(githubContributor);
  //       this.$log.info('Activated Contributors View');
  //   });
  // }

  // getContributors(githubContributor) {
  //   return githubContributor.getContributors(10).then((data) => {
  //     this.contributors = data;

  //     return this.contributors;
  //   });
  // }
}

export default MalarkeyDirective;
