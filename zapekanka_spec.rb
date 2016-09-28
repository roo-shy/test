class Zapekanka
  attr_reader :options
    
  def initialize(options={})
    @options = options
  end 

  def apply_smetana
    @smetana = @options[:smetana]
  end 

  def has_smetana_on_it?
    @smetana
  end 
end 

describe Zapekanka do 
  describe "#apply_smetana" do
    subject { zapekanka }
    before { zapekanka.apply_smetana }
    
    context "with smetana" do
    let(:zapekanka) {Zapekanka.new(:smetana => true)}
    
    it { should have_smetana_on_it }
  end
  
  context "without smetana" do
    let(:zapekanka) {Zapekanka.new(:smetana => false)}
    
    it { should_not have_smetana_on_it }
  end 
 end 
end 