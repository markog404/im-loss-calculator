function Calculate() {
  const AI = document.querySelector(".intial__price__a").value;
  const BI = document.querySelector(".intial__price__b").value;
   const AF = document.querySelector(".final__price__a").value;
   const BF = document.querySelector(".final__price__b").value;
  
  const impermanent__loss = document.querySelector(".impermanent__loss");
  const expected__value = document.querySelector(".expected__value");
  const expected = document.querySelector(".expected");
  const nothing = document.querySelector(".nothing");
  
  impermanent__loss.innerHTML = "";
  expected__value.innerHTML = "";
  expected.innerHTML = "";
  nothing.innerHTML = "";
  
  
    const profit = (((BI*AF+AI*BF)-(Math.sqrt((AI * BI*BF)/AF)*AF+Math.sqrt((AI * BI*AF)/BF)*BF))/(BI*AF+AI*BF)*100).toFixed(4);
    const profit_lp = parseFloat(((1/(2*AI*BI))*(Math.sqrt((AI * BI*BF)/AF)*AF+Math.sqrt((AI * BI*AF)/BF)*BF)).toFixed(4));
  
      const profit_hodl = parseFloat(((1/(2*AI*BI))*(BI*AF+AI*BF)).toFixed(4));
  
    impermanent__loss.innerHTML = "Impermanent loss : " + profit +"%";
    expected__value.innerHTML = " Expceted value for every $1 invested: <br>"
    expected.innerHTML = "(a) providing liquidity: $"+ profit_lp + "  (b) holding: $" + profit_hodl;
  
  
};