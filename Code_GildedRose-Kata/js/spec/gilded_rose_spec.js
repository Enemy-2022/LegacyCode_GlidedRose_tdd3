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


});
