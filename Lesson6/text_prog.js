function parseCSV(text) {
  // 改行で分割して各行を取得
  const lines = text.split("\n");

  // 空の配列を用意
  const data = [];

  // 2行目から処理（1行目はヘッダー）
  for (let i = 1; i < lines.length; i++) {
    console.log(lines[i]);
    // 行をカンマで分割
    const values = lines[i].split(",");
    console.log(values);
  }
}

// 下の文字列はCSVファイルを読み取ったときに得られるもの
text =
  "name,value,lat,lon\n東京,100,35.6762,139.6503\n大阪,80,34.6937,135.5023\n名古屋,60,35.1815,136.9066";
parseCSV(text);
