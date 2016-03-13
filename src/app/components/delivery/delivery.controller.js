class DeliveryController {
    constructor ($log, toastr, slackWebhook) {
    'ngInject';

        this.$log    = $log;
        this.toastr  = toastr;
        this.activate(this.toastr, slackWebhook);
    }

    activate(toastr, slackWebhook) {
        this.getSlackService(slackWebhook,this.toastr);
    }

    getSlackService(slackWebhook, toastr) {

        var data = {
            "username": "Front Desk",
            "icon_emoji": ":space_invader:",
            "attachments": [
                {
                    "fallback": "There is a delivery at the front desk.",
                    "color": "#ff0000",
                    "pretext": "There is a delivery at the 2nd floor front desk.",
                    "title": "Click here to let them know someone will help them shortly.",
                    "title_link": "https://api.slack.com/",
                    "text": "FedEx is at the front desk with a delivery.",
                    "fields": [
                        {
                            "title": "Delivery For",
                            "value": "Ken",
                            "short": true
                        }
                    ],
                }
            ]
        };
        
        this.slack = slackWebhook.hook();
        this.msg = JSON.stringify(data);
        this.slack.delivery(this.msg, function success(response){
            toastr.info("Someone is coming!")
        }, function error(error){
            toastr.info("Sorry, there was an error.")
        });
    }
}

export default DeliveryController;
