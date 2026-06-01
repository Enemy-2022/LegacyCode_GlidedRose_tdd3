describe("Gilded Rose", function() {

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    items = [ new Item("foo", 0, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(8);
  });

});
