class SlackWebhookService{
    constructor ($log, $http, $resource) {
        'ngInject';

        this.data = JSON.stringify({ text : 'There is a delivery.'});
        this.slack = $resource('https://hooks.slack.com/services/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',
            null,{
            delivery : {
                method:'POST',
                headers : { 'Content-Type': undefined },
            }
        });
    }

    hook() {
        return this.slack;
    }
}

export default SlackWebhookService;