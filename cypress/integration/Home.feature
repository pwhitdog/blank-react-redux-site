Feature: Opening the page
 
  I want to open the localhost page
  
  @focus
  Scenario: Opening my home page
    Given I open "http://localhost:3000/" page
    Then I see "React Redux App" in the title