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

p Drunk.methods - Object.instance_methods

# => [:allocate, :new, :superclass, :<, :<=, :>, :>=, :included_modules, :include?, :name, :ancestors, :instance_methods, :public_instance_methods, :protected_instance_methods, :private_instance_methods, :constants, :const_get, :const_set, :const_defined?, :const_missing, :class_variables, :remove_class_variable, :class_variable_get, :class_variable_set, :class_variable_defined?, :public_constant, :private_constant, :singleton_class?, :include, :prepend, :module_exec, :class_exec, :module_eval, :class_eval, :method_defined?, :public_method_defined?, :private_method_defined?, :protected_method_defined?, :public_class_method, :private_class_method, :autoload, :autoload?, :instance_method, :public_instance_method]