    <script>
  $(document).on('customEvent_checkoutStep3', function (event, options) {
    var mapToGTMProduct = function (productParsedData) {
      var product = window.productRepository.getProductById(productParsedData.id);
      return {
        'name': NeweraGTM.getOrDefault(product.name),
        'id': NeweraGTM.getOrDefault(product.code),
        'price': NeweraGTM.getOrDefault(product.price),
        'brand': NeweraGTM.getOrDefault(product.brand),
        'variant': String(NeweraGTM.getOrDefault(productParsedData.variant)),
        'dimension8': NeweraGTM.getOrDefault(product.color),
        'dimension9': NeweraGTM.getOrDefault(product.capType),
        'dimension10': NeweraGTM.getOrDefault(product.style),
        'quantity': productParsedData.quantity
      };
    };
    
    dataLayer.push({
      'ecommerce': {
        'currencyCode': NeweraGTM.getOrDefault(window.productRepository.getProductById(options.products[0].id).currencyIso),
        'checkout': {
          'actionField': {'step': 3, 'option': NeweraGTM.getOrDefault(options.deliveryMethod)},
          'products': options.products.map(mapToGTMProduct)
        }
      },
      'event': 'gtm-ee-event',
      'gtm-ee-event-action': 'Checkout Step 3',
      'gtm-ee-event-non-interaction': 'False'
    });
  });
</script>


