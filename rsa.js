var E = 0;
var D = 0;
var P = 0;
var Q = 0;
var N = 0;
var M = "";
var Cipher = "";
var Phi = 0;
var Dec = "";

$("#encrpt").click(function() {

  P = $("#P").val();
  Q = $("#Q").val();
  N = P * Q;
  Phi = (P - 1) * (Q - 1);

  alert("N=" + N + ", ø(N)=" + Phi);

  E = $("#E").val();
  D = $("#D").val();

  var gcd = function(a, b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  // var i;
  // for (i = 2; i < Phi; i++) {
  //   if (i%Phi != 0 && i%N !=0)
  //     Correct.push(i);
  //
  //   }
  //
  //   alert(Correct.pop());
  var Flag = false;
  if (gcd(E, Phi) == 1 && E > 1 && E < Phi)
    Flag = true;

  if (Flag && D * E % Phi == 1) {
    alert("Encrypting...");
    M = $("#Plaintext").val();
    
    var encrypt = function (base, exponent, modulus) {
    if (modulus === 1) return 0;
    var result = 1;
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % 2 === 1)  //odd number
            result = (result * base) % modulus;
        exponent = exponent >> 1; //divide by 2
        base = (base * base) % modulus;
    }
    return result;
};

    Cipher = encrypt(M,E,N);
    Dec = encrypt(Cipher,D,N);


    $("#result").html("Your Encrypted message is: " + Cipher);
    $("#decrpt").html("Your Decrypted message is: " + Dec);
  } else {
    alert("Please Enter Valid Numbers!");
    E = 0;
    D = 0;
  }

});
