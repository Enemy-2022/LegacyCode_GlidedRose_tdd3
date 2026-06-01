function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++)
  {
    var item = items[i];

    var isAgedBrie = item.name === 'Aged Brie';
    var isBackstagePass = item.name === 'Backstage passes to a TAFKAL80ETC concert';
    var isSulfuras = item.name === 'Sulfuras, Hand of Ragnaros';
    var isConjured = item.name === 'Conjured Mana Cake';

    if (!isAgedBrie && !isBackstagePass)
    {
      if (item.quality > 0 && !isSulfuras)
      {
        item.quality--;

        if (isConjured && item.quality > 0)
        {
          item.quality--;
        }
      }
    }
      else
      {
        if (item.quality < 50)
        {
          item.quality++;

          if (isBackstagePass)
          {
            if (item.sell_in < 11 && item.quality < 50)
            {
              item.quality++;
            }

            if (item.sell_in < 6 && item.quality < 50)
            {
              item.quality++;
            }
          }
        }
      }

    if (!isSulfuras)
    {
      item.sell_in--;
    }

    if (item.sell_in < 0)
    {
      if (isAgedBrie)
      {
        if (item.quality < 50)
        {
          item.quality++;
        }
      }
        else if (isBackstagePass)
      {
        item.quality = 0;
      }
        else
      {
        if (item.quality > 0 && !isSulfuras)
        {
          item.quality--;

          if (isConjured && item.quality > 0)
          {
            item.quality--;
          }
        }
      }
    }
  }
}