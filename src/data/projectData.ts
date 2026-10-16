/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Veri Yapıları ve Algoritmalar - Proje 1
 * Hazırlayan: Enes Öztürk
 */

export interface StepDetail {
  stepNumber: number;
  title: string;
  array: number[];
  sortedUntilIndex: number;
  highlightIndices: number[];
  targetIndex?: number;
  actionType: 'compare' | 'shift' | 'insert' | 'swap' | 'initial' | 'complete';
  explanation: string;
  mathDetail?: string;
}

export const INSERTION_SORT_ORIGINAL = [22, 27, 16, 2, 18, 6];

export const INSERTION_SORT_STEPS: StepDetail[] = [
  {
    stepNumber: 0,
    title: "Başlangıç Durumu",
    array: [22, 27, 16, 2, 18, 6],
    sortedUntilIndex: 0,
    highlightIndices: [0],
    actionType: 'initial',
    explanation: "Insertion Sort (Yerleştirme Sıralaması) mantığında ilk eleman (22) tek başına sıralı bir alt dizi kabul edilir. İkinci elemandan itibaren her sayı solundaki sıralı bloğa uygun yerine yerleştirilir."
  },
  {
    stepNumber: 1,
    title: "1. Aşama: 27 Elemanının İncelenmesi",
    array: [22, 27, 16, 2, 18, 6],
    sortedUntilIndex: 1,
    highlightIndices: [0, 1],
    targetIndex: 1,
    actionType: 'compare',
    explanation: "27 sayısı ele alınır ve solundaki 22 ile kıyaslanır. 27 > 22 olduğundan herhangi bir kaydırma yapılmaz, 27 olduğu yerde kalır. Sıralı alt dizi [22, 27] haline gelir."
  },
  {
    stepNumber: 2,
    title: "2. Aşama: 16 Elemanının Yerleştirilmesi",
    array: [16, 22, 27, 2, 18, 6],
    sortedUntilIndex: 2,
    highlightIndices: [0],
    targetIndex: 0,
    actionType: 'insert',
    explanation: "16 sayısı ele alınır. 27'den küçüktür (27 sağa kayar), 22'den de küçüktür (22 sağa kayar). 16 sayısı en başa (0. indekse) yerleştirilir. Sıralı alt dizi: [16, 22, 27]."
  },
  {
    stepNumber: 3,
    title: "3. Aşama: 2 Elemanının Yerleştirilmesi",
    array: [2, 16, 22, 27, 18, 6],
    sortedUntilIndex: 3,
    highlightIndices: [0],
    targetIndex: 0,
    actionType: 'insert',
    explanation: "2 sayısı ele alınır. Sıralı kısımdaki 27, 22 ve 16 sayılarının hepsinden küçük olduğu için bu üç sayı birer adım sağa ötelenir. 2 sayısı dizinin en başına yerleştirilir. Sıralı alt dizi: [2, 16, 22, 27]."
  },
  {
    stepNumber: 4,
    title: "4. Aşama: 18 Elemanının Yerleştirilmesi",
    array: [2, 16, 18, 22, 27, 6],
    sortedUntilIndex: 4,
    highlightIndices: [2],
    targetIndex: 2,
    actionType: 'insert',
    explanation: "18 sayısı ele alınır. 27 ve 22'den küçük olduğu için onlar sağa kaydırılır. 16'dan büyük olduğu için 16'nın hemen sağına (2. indekse) yerleştirilir. Sıralı alt dizi: [2, 16, 18, 22, 27]."
  },
  {
    stepNumber: 5,
    title: "5. Aşama: 6 Elemanının Yerleştirilmesi (Son Adım)",
    array: [2, 6, 16, 18, 22, 27],
    sortedUntilIndex: 5,
    highlightIndices: [1],
    targetIndex: 1,
    actionType: 'complete',
    explanation: "Son eleman olan 6 incelenir. 27, 22, 18 ve 16 sayılarından küçüktür, hepsi sağa kaydırılır. 2 sayısından büyüktür, dolayısıyla 2'nin hemen sağına (1. indekse) yerleştirilir. Dizi tamamen sıralanmış olur: [2, 6, 16, 18, 22, 27]."
  }
];

export const SELECTION_SORT_ORIGINAL = [7, 3, 5, 8, 2, 9, 4, 15, 6];

export const SELECTION_SORT_STEPS: StepDetail[] = [
  {
    stepNumber: 0,
    title: "Başlangıç Dizisi",
    array: [7, 3, 5, 8, 2, 9, 4, 15, 6],
    sortedUntilIndex: -1,
    highlightIndices: [],
    actionType: 'initial',
    explanation: "Selection Sort (Seçmeli Sıralama) mantığında her adımda dizinin taranan kısmındaki en küçük (minimum) eleman bulunur ve o anki adımın başlangıç indeksindeki eleman ile takas (swap) edilir."
  },
  {
    stepNumber: 1,
    title: "1. Adım: En Küçük Eleman (2) ile 0. İndeksteki (7) Takası",
    array: [2, 3, 5, 8, 7, 9, 4, 15, 6],
    sortedUntilIndex: 0,
    highlightIndices: [0, 4],
    targetIndex: 0,
    actionType: 'swap',
    explanation: "Dizinin tamamı taranır ve en küçük sayı aranır. En küçük eleman 2'dir (4. indekste). Bu eleman, dizinin ilk elemanı olan 7 (0. indeks) ile yer değiştirir (swap). Artık [2] kesin olarak sıralıdır."
  },
  {
    stepNumber: 2,
    title: "2. Adım: 1. İndeksten İtibaren En Küçük Eleman (3) Kontrolü",
    array: [2, 3, 5, 8, 7, 9, 4, 15, 6],
    sortedUntilIndex: 1,
    highlightIndices: [1],
    targetIndex: 1,
    actionType: 'compare',
    explanation: "Dizinin kalan kısmı [3, 5, 8, 7, 9, 4, 15, 6] taranır. En küçük eleman zaten 1. indisteki 3'tür. Kendisiyle yerinde kalır (takasa gerek kalmaz veya 3 ile 3 yer değiştirir). Sıralı bölge: [2, 3]."
  },
  {
    stepNumber: 3,
    title: "3. Adım: En Küçük Eleman (4) ile 2. İndeksteki (5) Takası",
    array: [2, 3, 4, 8, 7, 9, 5, 15, 6],
    sortedUntilIndex: 2,
    highlightIndices: [2, 6],
    targetIndex: 2,
    actionType: 'swap',
    explanation: "Dizinin kalan kısmı [5, 8, 7, 9, 4, 15, 6] taranır. Bu aralıktaki en küçük eleman 4'tür (6. indekste). 4 sayısı, 2. indisteki 5 ile yer değiştirir (swap). Sıralı bölge: [2, 3, 4]."
  },
  {
    stepNumber: 4,
    title: "4. Adım: En Küçük Eleman (5) ile 3. İndeksteki (8) Takası",
    array: [2, 3, 4, 5, 7, 9, 8, 15, 6],
    sortedUntilIndex: 3,
    highlightIndices: [3, 6],
    targetIndex: 3,
    actionType: 'swap',
    explanation: "Dizinin kalan kısmı [8, 7, 9, 5, 15, 6] taranır. Bu aralıktaki en küçük eleman 5'tir (6. indekste). 5 sayısı, 3. indisteki 8 ile yer değiştirir (swap). 4. adım tamamlanmıştır. Sıralı bölge: [2, 3, 4, 5]."
  }
];

export const RAW_MARKDOWN_REPORT = `# Proje 1 - Veri Yapıları ve Algoritmalar

**Hazırlayan:** Enes Öztürk  
**Platform:** Patika.dev / Kodluyoruz  
**Tarih:** 2024  

---

## BÖLÜM 1: Insertion Sort (Yerleştirme Sıralaması)

### Soru:
\`[22, 27, 16, 2, 18, 6]\` dizisinin Insertion Sort (Yerleştirme Sıralaması) türüne göre aşamalarını yazınız.

### Çözüm Aşamaları:
Insertion Sort algoritmasında ilk eleman tek başına sıralı kabul edilir. İkinci elemandan itibaren her bir eleman sol tarafındaki sıralı diziye kıyaslanarak uygun konuma yerleştirilir (kendinden büyük olan elemanlar sağa ötelenir).

* **Başlangıç:** \`[22 | 27, 16, 2, 18, 6]\` (22 elemanı sıralı kabul edilir)
* **1. Aşama:** 27 sayısı seçilir. Solundaki 22 ile kıyaslanır. 27 > 22 olduğundan yer değiştirmez.
  -> \`[22, 27, 16, 2, 18, 6]\`
* **2. Aşama:** 16 sayısı seçilir. 27'den küçük, 22'den küçüktür. 27 ve 22 birer adım sağa kaydırılır, 16 en başa yerleşir.
  -> \`[16, 22, 27, 2, 18, 6]\`
* **3. Aşama:** 2 sayısı seçilir. Sıralı kısımdaki 27, 22 ve 16 sayılarının tamamından küçük olduğu için hepsi sağa kayar ve 2 en başa yerleştirilir.
  -> \`[2, 16, 22, 27, 18, 6]\`
* **4. Aşama:** 18 sayısı seçilir. 27 ve 22'den küçüktür (onlar sağa kayar), 16'dan büyüktür. 16'nın hemen sağına yerleşir.
  -> \`[2, 16, 18, 22, 27, 6]\`
* **5. Aşama:** 6 sayısı seçilir. 27, 22, 18 ve 16'dan küçüktür (sağa kayarlar), 2'den büyüktür. 2'nin hemen sağına yerleşir.
  -> \`[2, 6, 16, 18, 22, 27]\`

Dizi başarıyla küçükten büyüğe sıralanmıştır.

---

## BÖLÜM 2: Big-O Gösterimi

### Big-O İspatı:
Insertion Sort algoritmasında n elemanlı bir dizi için:
* 1. adımda en fazla 1 işlem,
* 2. adımda en fazla 2 işlem,
* 3. adımda en fazla 3 işlem,
* ...
* (n - 1). adımda en fazla (n - 1) işlem yapılır.

Toplam işlem sayısı serisi:
$$1 + 2 + 3 + \\dots + (n - 1) = \\frac{n \\cdot (n - 1)}{2} = \\frac{n^2 - n}{2}$$

Big-O asimptotik notasyonunda baskın olmayan terimler ($n$) ve sabit katsayılar ($1/2$) ihmal edilir.
Bu nedenle zaman karmaşıklığı:

**Big-O Değeri:** **O(n²)**

---

## BÖLÜM 3: Time Complexity & 18 Sayısının Durumu

### Time Complexity Tanımları:
* **Best Case (En İyi Durum):** Aradığımız sayının dizinin en başında (ilk indeksinde) olması -> **O(1)** veya sıralama için **O(n)**
* **Average Case (Ortalama Durum):** Aradığımız sayının dizinin ortasında veya ortalama bir konumda bulunması -> **O(n²)** (Arama için **O(n)**)
* **Worst Case (En Kötü Durum):** Aradığımız sayının dizinin en sonunda yer alması veya dizide hiç bulunmaması -> **O(n²)** (Arama için **O(n)**)

### Soru:
> "Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız."

### Cevap ve Açıklama:
Dizinin sıralanmış hali:
\`[2, 6, 16, 18, 22, 27]\`

* Dizi toplam 6 elemanlıdır (indeksler: 0, 1, 2, 3, 4, 5).
* 18 sayısı dizinin 3. indeksinde (ortanca eleman grubunda) yer almaktadır.
* Sayı en başta (0. indekste: 2) olmadığı için **Best Case** değildir.
* Sayı en sonda (5. indekste: 27) olmadığı için **Worst Case** değildir.
* 18 sayısı dizinin tam ortasında yer aldığından **AVERAGE CASE** kapsamına girer.

---

## BÖLÜM 4: Selection Sort (Seçmeli Sıralama)

### Soru:
\`[7, 3, 5, 8, 2, 9, 4, 15, 6]\` dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

### Seçmeli Sıralama Mantığı:
Her adımda dizinin henüz sıralanmamış bölümündeki en küçük eleman bulunur ve bu eleman o adımın başlangıç indeksindeki eleman ile yer değiştirilir (swap).

* **Başlangıç:** \`[7, 3, 5, 8, 2, 9, 4, 15, 6]\`
* **1. Adım:**
  Tüm dizideki en küçük eleman aranır. En küçük sayı **2**'dir.
  2 ile dizinin 0. indeksindeki **7** yer değiştirir (swap).
  -> **\`[2, 3, 5, 8, 7, 9, 4, 15, 6]\`**
* **2. Adım:**
  1. indeksten sona kadar kalan elemanlar incelenir: \`[3, 5, 8, 7, 9, 4, 15, 6]\`.
  En küçük sayı zaten **3**'tür. 3 olduğu yerde kalır (kendisiyle takas edilir).
  -> **\`[2, 3, 5, 8, 7, 9, 4, 15, 6]\`**
* **3. Adım:**
  2. indeksten sona kadar kalan elemanlar incelenir: \`[5, 8, 7, 9, 4, 15, 6]\`.
  Bu aralıktaki en küçük sayı **4**'tür (6. indekste).
  4 ile 2. indisteki **5** sayısı yer değiştirir (swap).
  -> **\`[2, 3, 4, 8, 7, 9, 5, 15, 6]\`**
* **4. Adım:**
  3. indeksten sona kadar kalan elemanlar incelenir: \`[8, 7, 9, 5, 15, 6]\`.
  Bu aralıktaki en küçük sayı **5**'tir (6. indekste).
  5 ile 3. indisteki **8** sayısı yer değiştirir (swap).
  -> **\`[2, 3, 4, 5, 7, 9, 8, 15, 6]\`**

---

*Bu çalışma Enes Öztürk tarafından hazırlanmış olup Kodluyoruz/Patika.dev Veri Yapıları ve Algoritmalar dersi Proje 1 teslim standardına uygundur.*
`;
