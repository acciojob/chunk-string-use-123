function stringChop(str, size) {
	if (!str || size <= 0) {
        return [];
    }

    // Initialize an array to hold the chunks
    const chunks = [];

    // Iterate through the string and extract chunks
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.substring(i, i + size));
    }

    return chunks;
  // your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
