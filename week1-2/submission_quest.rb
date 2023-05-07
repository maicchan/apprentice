class Cards

    @@suits = ['ハート', 'スペード', 'ダイヤ', 'クローバー']
    @@nums = (1..13).to_a
    @@deck = {}
    # @@hand = []


  def set_deck
    @@suits.each do |suit|
      @@deck[suit] = @@nums
    end
  end
end

class Person < Cards
  def initialize(name)
    @name = name
    @hand = []
    @point = 0
  end

  def name
    return @name
  end

  def calculate　# 点数の計算
    # @point = @@hand.inject(0) {|sum, hash| sum + hash[:num]}
    @point = 0
    ace_count = 0

  
    @hand.each do |card|
      if card[:num] >= 2 && card[:num] <= 9 # 2から9までの処理
        @point += card[:num]
      elsif card[:num] >= 10 && card[:num] <= 13 # １０から１３までの処理
        @point += 10
      elsif card[:num] == 1 # Aの処理
        ace_count += 1
        @point += 11
      end
    end

  # Aを処理
    ace_count.times do
      if @point > 21
        @point -= 10
      end
    end

    return @point
  end

  def point
    return @point
  end

  def draw_card()　#　カードを引く
    select_suit = @@suits[rand(0..3)]
    count = @@deck[select_suit].length
    # select_num = @@deck[select_suit][rand(0..(count - 1))]
    select_num = @@deck[select_suit].sample
    @hand.push(suit: select_suit,num: select_num)
    # @@deck[select_suit].delete(select_num - 1)
    @@deck[select_suit].delete(select_num)

    if @name == 'ディーラー' && @hand.length == 2
      puts "#{@name}の引いた2枚目のカードはわかりません。"
    else
      case select_num
      when 1
        puts "#{@name}が引いたカードは#{select_suit}のAです."
      when 11
        puts "#{@name}が引いたカードは#{select_suit}のJです."
      when 12
        puts "#{@name}が引いたカードは#{select_suit}のQです."
      when 13
        puts "#{@name}が引いたカードは#{select_suit}のKです."
      else
        puts "#{@name}が引いたカードは#{select_suit}の#{select_num}です."
      end
    end
  end

  def add_card() # カードを追加
    case @name
    when 'あなた'
      answer = ""
      until answer == 'N' || self.calculate > 21
        puts "#{@name}の現在の得点は#{self.calculate}です。カードを引きますか？（Y/N）"
        answer = gets.chomp
        if answer == 'Y'
          self.draw_card()
        elsif answer == 'N'
          return
        else
        puts "YかNを入力してください。"
        end
      end
    else
      puts "#{@name}の引いた2枚目のカードは#{@hand[1][:suit]}の#{@hand[1][:num]}でした。"
      until self.calculate > 17
        puts "#{@name}の現在の得点は#{self.calculate}です。"
        self.draw_card()
      end
    end
  end
end

class Game
  def initialize(name)
    @name = name
    @cards = Cards.new
    @player = Person.new('あなた')
    @dealer = Person.new('ディーラー')
  end

  def start
    @cards.set_deck # デッキをセット

    @player.draw_card # カードを引く
    @player.draw_card

    @dealer.draw_card
    @dealer.draw_card

    @player.add_card # 追加のカード
    if @player.point > 21
      puts "あなたの得点が21を超えました。あなたの負けです。"
      return
    end
    @dealer.add_card
    if @dealer.point > 21
      puts "ディーラーの得点が21を超えました。あなたの勝ちです!"
      return
    end

    self.judge(@player.point, @dealer.point)　# 勝利判定
  end

  def judge(point1, point2)
    if point1 > point2
      puts "#{@player.name}の勝ちです！"
    elsif point1 < point2
      puts "#{@dealer.name}の勝ちです！"
    else
      puts "引き分けです！"
    end
  end
end

#ゲーム開始
blackjack = Game.new('blackjack')
blackjack.start
