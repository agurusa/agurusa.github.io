class Drunk

  def initialize(name)
    @person = name
    puts "How many drinks have you had?"
    @number_of_drinks = gets.chomp.to_i
    have_another
  end

  def have_another
    while @number_of_drinks < 4
      @number_of_drinks += 1
      puts "You've had #{@number_of_drinks} drinks."
      draw_a_thing
    end
      go_to_bed
  end

  def go_to_bed
    puts "#{@person} is asleep."
  end

  def draw_a_thing
    art_ideas = ["a unicorn in an airport", "a melty whale", "an alien singing opera"]
    drawing = art_ideas.sample
    puts "You've drawn #{drawing}"
  end

end

i = Drunk.new("aarthi")
p i