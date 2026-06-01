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

});
