function ekle(num) {
    $('.calc-display').val($('.calc-display').val() + num);
}
function hesapla() {
    $('.calc-display').val(eval($('.calc-display').val()));
}
function teksil() {
    valuexd = $('.calc-display').val();
    $('.calc-display').val(valuexd.substring(0, valuexd.length - 1));
}
function sil() {
    $('.calc-display').val('');
}