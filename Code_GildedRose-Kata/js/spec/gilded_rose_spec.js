describe("Gilded Rose", function() {

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    items = [ new Item("foo", 0, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(8);
  });

  it("The Quality of an item is never negative", function() {
    items = [ new Item("foo1", 0, 1) ];
    update_quality();
    update_quality();
    update_quality();
    expect(items[0].quality).toEqual(0);
  });
  

  it("Aged Brie actually increases in Quality the older it gets", function() {
    items = [ new Item("Aged Brie", 5, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1);
  });
 
  it("The Quality of an item is never more than 50", function() {
    items = [ new Item("Aged Brie", 5, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(0);
  });
  
  it("Backstage passes increase quality based on sell_in and drop to 0 after concert", function() {
  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 12, 5) ];
  update_quality();
  expect(items[0].quality).toEqual(6);

  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ];
  update_quality();
  expect(items[0].quality).toEqual(12);

  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ];
  update_quality();
  expect(items[0].quality).toEqual(23);

  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30) ];
  update_quality();
  expect(items[0].quality).toEqual(0);
});


 it("Conjured items degrade in Quality twice as fast as normal items", function() {
    items = [ new Item("Conjured Mana Cake", 5, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(8);
  });
});
