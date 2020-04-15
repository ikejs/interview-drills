// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

// G -> C
// C -> G
// T -> A
// A -> U



const RNAify = (dna) => {
  const RNA = [];
  dna.map(letter => {
    switch(letter) {
      case 'G':
        RNA.push('C');
        break;
      case 'C':
        RNA.push('G');
        break;
      case 'T':
        RNA.push('A');
        break;
      case 'A':
        RNA.push('U');
        break;
    }
  });
  return RNA;
}


const DNA = ['G', 'C', 'A', 'T', 'T', 'G', 'A', 'T', 'G', 'A'];
console.log(RNAify(DNA))