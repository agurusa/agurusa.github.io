money_owed = {
  50 => "dinner",
  26 => "drinks",
  80 => "homework",
  32 => "dinner",
  43 => "drinks"
}

# money_owed.each do |money, reason|
#   puts money.to_s + ":" + reason
# end

# p money_owed.find_all{|money, reason| money > 30}

# money_owed.each do |money, reason|
#   if money > 30
#     p money, reason
#   end
# end

# p money_owed.count

# count = 0
# money_owed.each do |money, reason|
#   count = count + 1
# end
# p count

# p money_owed.min

# p money_owed.group_by{|money,reason| reason}

# p money_owed.select{|money,reason| money%10 == 0}

# p money_owed.map{|money,reason| money* 1.2}

p money_owed.map{|money,reason| money* 1.2}.reduce(:+)