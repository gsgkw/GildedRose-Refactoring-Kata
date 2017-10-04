var assert = chai.assert
var expect = chai.expect


beforeEach(function() {
  items = [];

  items[0] = new Item('+5 Dexterity Vest', 10, 20);
  items[1] = new Item('Aged Brie', 2, 0);
  items[2] = new Item('Elixir of the Mongoose', 5, 7);
  items[3] = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
  items[4] = new Item('Sulfuras, Hand of Ragnaros', -1, 80);
  items[5] = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
  items[6] = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49);
  items[7] = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49);
  gildedRose = new Shop(items);
  gildedRose.updateQuality();
});


describe('Gilded Rose', function() {

  describe('#normal items', function() {

    it('sellIn decreases by 1', function(){
      assert.equal(gildedRose.items[0].sellIn, 9 );
    });

    it('quality decreases by 1 during sellIn', function(){
      assert.equal(gildedRose.items[0].quality, 19 );
    });

    it('quality decreases by 2 after sellIn', function(){
      var times = 10;
        for(var i=0; i < times; i++){
            gildedRose.updateQuality();
        }
      assert.equal(gildedRose.items[0].quality, 8 );
    });

    it('sellIn can be negative', function(){
      var times = 10;
        for(var i=0; i < times; i++){
            gildedRose.updateQuality();
        }
      assert.equal(gildedRose.items[2].sellIn, -6 );
    });


    it('quality cannot be negative', function(){
      var times = 10;
        for(var i=0; i < times; i++){
            gildedRose.updateQuality();
        }
      assert.equal(gildedRose.items[2].quality, 0 );
    });
  });

  describe('#cheese', function() {
    it('quality increases with age', function(){
      assert.equal(gildedRose.items[1].quality, 1 );
    });
    it('quality cannot be more than 50', function(){
      var times = 30;
        for(var i=0; i < times; i++){
            gildedRose.updateQuality();
        }
      assert.equal(gildedRose.items[1].quality, 50 );
    });
  });
});
