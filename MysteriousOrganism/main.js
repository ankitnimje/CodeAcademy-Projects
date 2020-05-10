// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const base = Math.floor(Math.random() * 15);
      const baseElement = dna[base];
      while (baseElement === dna[base]) {
        dna[base] = returnRandBase();
      }
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i=0; i<15; i++) {
        if( dna[i] === pAequor.dna[i] ) {
          count++;
        }
      }
      const percent  = ((count / 15) * 100).toFixed(2);
      console.log(`Specimen - ${specimenNum} and Specimen - ${pAequor.specimenNum} have ${percent}% DNA in common`);
    },
    willLikelySurvive() {
      const survivors = this.dna.filter(el => el === "c" || el === "G");
      return (survivors.length/this.dna.length) >= 0.6;
    }
  }
};

let survivingpAequor = [];
let count = 1;

while (survivingpAequor.length < 30) {
  let expArr = pAequorFactory(count, mockUpStrand());
  if (expArr.willLikelySurvive()) {
    survivingpAequor.push(expArr);
  }
  count++;
}

console.log(survivingpAequor);
