describe("GradeParser", function() {

  it("returns an array of up/down/even for the given array", function() {
    var result = GradeParser.getMovements([6,3,5,4,3,4,4,5]);
    expect(result).toEqual(["down","up","down","down","up","even","up"]);
  });

  it("returns true if a student is in decline", function() {
    var result = GradeParser.isStudentInDecline(["up","even","down","down","even","even","down"]);
    expect(result).toEqual(true);
  });

  it("returns false if a student is NOT in decline", function() {
    var result = GradeParser.isStudentInDecline(["down","up","down","down","up","even","up"]);
    expect(result).toEqual(false);
  });

});
