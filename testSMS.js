var telapi = require('telapi').client,
    sms	   = new telapi(
		        'ACa1852f1f9c9c4a83a123986c30c54935', 
			    'ce374ecf093846b18c1c94da6a0c8f87'
		    );

    sms.create('sms_messages', {
	From : '+16788046693',
	To   : '+40741699975',
        Body : 'Test de SMS curvooooooooo'
    });
