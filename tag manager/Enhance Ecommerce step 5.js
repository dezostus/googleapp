 <script>
        function pushToDataLayer(actionField) {
            dataLayer.push({
                'ecommerce': {
                    'currencyCode': NeweraGTM.getOrDefault('USD'),
                    'checkout': {
                        'actionField': actionField,
                        'products': [
                            
                            {
                                'name': NeweraGTM.getOrDefault('MILB AC BUFBIS ALT 2'),
                                'id': '70300223',
                                'price': NeweraGTM.getOrDefault('40.0'),
                                'brand': NeweraGTM.getOrDefault(''),
                                'variant': NeweraGTM.getOrDefault('8'),
                                'dimension8': NeweraGTM.getOrDefault('YELLOW'),
                                'dimension9': NeweraGTM.getOrDefault('Fitted'),
                                'dimension10': NeweraGTM.getOrDefault('59FIFTY'),
                                'quantity': 1
                            },
                            
                        ]
                    }
                },
                'event': 'gtm-ee-event',
                'gtm-ee-event-action': 'Checkout Step 5',
                'gtm-ee-event-non-interaction': 'False'
            });
        }

        function extractPaymentInfo(info) {
            var tokens = info.split(/(?=[A-Z])/);
            return tokens.length >= 3 ? tokens.splice(0, tokens.length - 1).join('') : tokens.join(' ');
        }

        var actionField = {'step': 5};
        
            
                var paymentType = extractPaymentInfo(NeweraGTM.getOrDefault('CreditCard'));
                var giftCard = '';
                actionField['option'] = $.grep([giftCard, paymentType], Boolean).join(", ");
                $(document).on('customEvent_orderCompleteTrying', function (event, options) {
                    pushToDataLayer(actionField);
                });
            
            
        
    </script>
