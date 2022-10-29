/**
 * https://leetcode.com/problems/flood-fill/
 * 
 * Instruction Video: 
 * https://www.youtube.com/watch?v=aehEcTEPtCs
 * 
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 const  floodFill = (image, sr, sc, color) => {
  if (image[sr][sc] === color) return image;
  fill(image, sr, sc, image[sr][sc], color);
  return image;
};

const fill = (image, sr, sc, color, newColor) => {
  //roll(sr) first array, coloumn second array
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== color) {
      return;
  }
  image[sr][sc] = newColor;
  fill(image, sr - 1, sc, color, newColor);
  fill(image, sr + 1, sc, color, newColor);
  fill(image, sr, sc + 1, color, newColor);
  fill(image, sr, sc - 1, color, newColor);
}; 

//Test:
test1 = floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);
console.log(test1); // => [[2,2,2],[2,2,0],[2,0,1]]