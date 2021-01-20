const ChuSo = [' không ', ' một ', ' hai ', ' ba ', ' bốn ', ' năm ', ' sáu ', ' bảy ', ' tám ', ' chín '];
const Tien = ['', ' nghìn', ' triệu', ' tỷ', ' nghìn tỷ', ' triệu tỷ'];


export function docSo3ChuSo(baso) {
  let tram;
  let chuc;
  let donvi;
  let KetQua = '';
  tram = Math.floor(baso / 100);
  chuc = Math.floor((baso % 100) / 10);
  donvi = baso % 10;
  if (tram === 0 && chuc === 0 && donvi === 0) {
    return '';
  }
  if (tram !== 0) {
    KetQua += ChuSo[tram] + ' trăm ';
    if ((chuc === 0) && (donvi !== 0)) {
      KetQua += ' linh ';
    }
  }
  if ((chuc !== 0) && (chuc !== 1)) {
    KetQua += ChuSo[chuc] + ' mươi';
    if ((chuc === 0) && (donvi !== 0)) {
      KetQua = KetQua + ' linh ';
    }
  }
  if (chuc === 1) {
    KetQua += ' mười ';
  }
  switch (donvi) {
    case 1:
      if ((chuc !== 0) && (chuc !== 1)) {
        KetQua += ' mốt ';
      } else {
        KetQua += ChuSo[donvi];
      }
      break;
    case 5:
      if (chuc === 0) {
        KetQua += ChuSo[donvi];
      } else {
        KetQua += ' lăm ';
      }
      break;
    default:
      if (donvi !== 0) {
        KetQua += ChuSo[donvi];
      }
      break;
  }
  return KetQua;
}

export function doctien(SoTien) {
  let lan = 0;
  const i = 0;
  let so = 0;
  let KetQua = '';
  let tmp = '';
  let soAm = false;
  const ViTri = [];
  if (SoTien < 0) {
    soAm = true;
  } // return "Số tiền âm !";
  if (SoTien === 0) {
    return 'Không đồng';
  }// "Không đồng !";
  if (SoTien > 0) {
    so = SoTien;
  } else {
    so = -SoTien;
  }
  if (SoTien > 8999999999999999) {
    // SoTien = 0;
    return ''; // "Số quá lớn!";
  }
  ViTri[5] = Math.floor(so / 1000000000000000);
  if (isNaN(ViTri[5])) {
    ViTri[5] = '0';
  }
  so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
  ViTri[4] = Math.floor(so / 1000000000000);
  if (isNaN(ViTri[4])) {
    ViTri[4] = '0';
  }
  so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
  ViTri[3] = Math.floor(so / 1000000000);
  if (isNaN(ViTri[3])) {
    ViTri[3] = '0';
  }
  so = so - parseFloat(ViTri[3].toString()) * 1000000000;
  ViTri[2] = Math.floor(so / 1000000);
  if (isNaN(ViTri[2])) {
    ViTri[2] = '0';
  }
  ViTri[1] = Math.floor((so % 1000000) / 1000);
  if (isNaN(ViTri[1])) {
    ViTri[1] = '0';
  }
  ViTri[0] = Math.floor(so % 1000);
  if (isNaN(ViTri[0])) {
    ViTri[0] = '0';
  }
  if (ViTri[5] > 0) {
    lan = 5;
  } else if (ViTri[4] > 0) {
    lan = 4;
  } else if (ViTri[3] > 0) {
    lan = 3;
  } else if (ViTri[2] > 0) {
    lan = 2;
  } else if (ViTri[1] > 0) {
    lan = 1;
  } else {
    lan = 0;
  }
  Array(lan).fill(lan).map((l, index) => {
    return l - index;
  }).forEach(index => {
    tmp = docSo3ChuSo(ViTri[index]);
    KetQua += tmp;
    if (ViTri[index] > 0) {
      KetQua += Tien[index];
    }
    if ((index > 0) && (tmp.length > 0)) {
      KetQua += '';
    }
  });

  if (KetQua.substring(KetQua.length - 1) === ',') {
    KetQua = KetQua.substring(0, KetQua.length - 1);
  }
  KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
  if (soAm) {
    return 'Âm ' + KetQua + ' đồng'; // .substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
  } else {
    return KetQua + ' đồng'; // .substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
  }
}
