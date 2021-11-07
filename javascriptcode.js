
// Calculating The Total Value
 function calculateTotal(){
       const BestPrice = document.getElementById('best-price').innerText;
       const BestPriceValue = parseInt(BestPrice);

       const ExtraMemory = document.getElementById('extra-Memory').innerText;
       const ExtraMemoryValue = parseInt( ExtraMemory );

       const ExtraStorage = document.getElementById('extra-Storage').innerText;
       const ExtraStorageValue = parseInt(ExtraStorage);

       const ExtraCharge = document.getElementById('extra-Charge').innerText;
       const ExtraChargeValue = parseInt(ExtraCharge); 

      //  Update on the HTML
      document.getElementById('best-price').innerHTML = BestPriceValue;
      document.getElementById('extra-Memory').innerText = ExtraMemoryValue;
      document.getElementById('extra-Storage').innerText = ExtraStorageValue;
      document.getElementById('extra-Charge').innerText = ExtraChargeValue;

      const TotalPriceValue = BestPriceValue + ExtraChargeValue + ExtraMemoryValue + ExtraStorageValue;

//       Fixed The Value of Total Price and After Discount
      document.getElementById('total-Price').innerText = TotalPriceValue;
      document.getElementById('AfterDiscountPrice').innerText = TotalPriceValue;
  }

function GetButtonValue(price, ProductExtra){
       const ExtraButtonCost = document.getElementById( 'extra-' + ProductExtra );
       ExtraButtonCost.innerText = price;
       calculateTotal();
     }
// Calling The button By their Id 
document.getElementById('memoryButton-one').addEventListener( 'click', function(){
       const MemoryButtonOneValue = GetButtonValue(0, 'Memory' );
});
document.getElementById('memoryButton-two').addEventListener( 'click', function(){
       const MemoryButtonTwoValue = GetButtonValue(180, 'Memory');
});
document.getElementById('storageButton-one').addEventListener( 'click', function(){
      const StorageButtonOneValue = GetButtonValue(0, 'Storage');
});
document.getElementById('storageButton-two').addEventListener( 'click', function(){
      const StorageButtonTwo = GetButtonValue(100, 'Storage');
});
document.getElementById('storageButton-three').addEventListener( 'click', function(){
      const StorageButtonTwo = GetButtonValue(180 ,'Storage') ;
});
document.getElementById('deliveryButton-one').addEventListener( 'click', function(){
       const DeliveryButtonOne = GetButtonValue(0, 'Charge');
});
document.getElementById('deliveryButton-two').addEventListener( 'click', function(){
       const DeliveryButtonTwo = GetButtonValue(20, 'Charge');
});

// Applying Promo Code 
document.getElementById('PromoApplyButton').addEventListener('click', function(){
      const PromoInputField = document.getElementById('PromoInput');
      const PromoInputNumber = PromoInputField.value;
       if( PromoInputNumber == 'stevekaku' ){
                 const TotalPrice = document.getElementById('total-Price').innerText;
                 const DiscountAmount = TotalPrice * .20;
                 const TotalAmountAfterDiscount = TotalPrice - DiscountAmount;
                 document.getElementById('AfterDiscountPrice').innerText = TotalAmountAfterDiscount;
                 PromoInputField.value = '';
          }
      else{
       PromoInputField.value = '';
       alert('Invalid Promo Code');
    } 
});