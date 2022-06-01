let angkot = 1;
let maxAngkot = 10;

for (angkot; angkot <= maxAngkot; angkot++) {
  if (angkot <= 6) {
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
  } else if (angkot === 8) {
    console.log('Angkot No. ' + angkot + ' sedang lembur.');
  } else {
    console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
  }
}
