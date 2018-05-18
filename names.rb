removed = []
added = []
renamed = []

DATA.each_line do |line|
  old_name, new_name = line.split("\t")
  new_name = new_name.strip
  new_name = nil if new_name == ''
  old_name = nil if old_name == ''
  if old_name && new_name
    if old_name != new_name
      renamed << [old_name, new_name]
    end
  elsif old_name
    removed << old_name
  else
    added << new_name
  end
end

puts "REMOVED"
puts removed
puts "ADDED"
puts added
puts "RENAMED"
puts renamed.map { |pair| pair.join(" => ") }

__END__
	accessibility
	accessibilityFilled
account	account
accountFilled	accountFilled
addToOrder	addToOrder
addToOrderAndroid	
addToOrderFilled	addToOrderFilled
adjustment	adjustment
alcohol	alcohol
alcoholFilled	alcoholFilled
	appStore
arrowDownSmall	arrowDown
arrowDownSmallBold	arrowDownSmall
arrowEnter	
arrowLeft	
arrowLeftSmall	arrowLeft
arrowLeftSmallBold	arrowLeftSmall
arrowRight	
arrowRightSmall	arrowRight
arrowRightSmallBold	arrowRightSmall
arrowUpSmall	arrowUp
arrowUpSmallBold	arrowUpSmall
	backgroundCheck
bag	bag
bagFilled	bagFilled
	barcode
bell	bell
bellFilled	bellFilled
bogo	lightning
bogoFilled	lightningFilled
browse	browse
browseFilled	browseFilled
calendar	calendar
car	car
carFilled	carFilled
cart	cart
cartFilled	cartFilled
categories	categories
	categoriesFilled
check	checkmark
checkBold	
checkProgressComplete	checkmarkCircle
checkProgressDashed	checkmarkCircleDashed
	checkmarkCircleFilled
clock	clock
clockFilled	clockFilled
	coffee
	cold
	copy
compassFilled	
creditCard	creditCard
creditCardFilled	
deals	coupons
dealsFilled	couponsFilled
dealsIcon	
email	email
emailFilled	emailFilled
facebookFilled	facebook
faq	
	fire
	fireFilled
filter	filter
filterAndroid	
filterFilled	
flag	flag
flagFilled	flagFilled
gear	gear
gearFilled	gearFilled
gift	gift
giftcard	giftcard
giftcardFilled	
google	google
googleFilled	
	graph
	graphFilled
grid	
gridFilled	
guaranteedFresh	
guaranteedFreshFilled	
hamburger	menu
happy	reaction
help	help
helpFilled	helpFilled
home	home
homeFilled	homeFilled
iconExit	
iconPerson	person
iconPersonAdd	personAdd
iconPersonAddFilled	personAddFilled
iconPersonFilled	personFilled
inSeason	inSeason
inSeasonFilled	inSeasonFilled
info	info
infoFilled	infoFilled
instagram	instagram
items	items
itemsFilled	itemsFilled
itemsYouveOrdered	
lightbulb	lightbulb
lightbulbAndroid	
lightbulbFilled	lightbulbFilled
like	like
likeFilled	likeFilled
listsAdd	listsAdd
listsAndRecipes	recipes
listsAndRecipesFilled	
	locationCurrent
	locationCurrentFilled
locationMarker	locationMarker
locationMarkerFilled	locationMarkerFilled
lock	lock
	lockFilled
	unlock
	unlockFilled
logout	logout
loyaltyCard	loyaltyCard
loyaltyCardFilled	loyaltyCardFilled
message	chat
messageFilled	chatFilled
minus	minus
minusBold	
	moon
	moonFilled
money	money
	moneyFilled
more	more
moreFilled	moreFilled
no	no
noFilled	noFilled
note	instructions
noteFilled	instructionsFilled
office	office
officeFilled	officeFilled
orderHistory	orders
	ordersFilled
	order
orderProblem	orderIssue
	orderIssueFilled
orderReview	orderReview
	orderReviewFilled
organic	organic
organicFilled	organicFilled
	pencil
	pencilFilled
phone	call
phoneAndroid	
phoneAndroidFilled	
phoneFilled	callFilled
phoneIphone	phone
phoneIphoneFilled	phoneFilled
picture	photo
	photoMissing
pinterestFilled	pinterest
	playStore
plus	plus
plusBold	
popular	
pricing	sale
pricingFilled	saleFilled
pricingSame	
pricingSameFilled	
quickAdd	
reactionAdd	reactionAdd
reccuring	recurringOrder
	recurringOrderFilled
receipt	
refund	refund
	reorder
	reorderFilled
replace	replacement
replaceBold	
request	
save	saveForLater
saveFilled	saveForLaterFilled
	scan
scissors	scissors
search	search
	sendEmail
	sendEmailFilled
	share
	shareFilled
shareAndroid	
shareAndroid2	
shareAndroid2Filled	
shareAndroidFilled	
	skip
	skipFilled
sort	sort
specials	glitter
specialsFilled	glitterFilled
star	star
starFilled	starFilled
store	store
storeFilled	storeFilled
	sunset
	sunsetFilled
thumbsDown	thumbsDown
thumbsUp	thumbsUp
ticket	ticket
ticketFilled	ticketFilled
tip	
tipFilled	
tobacco	tobacco
trash	delete
trashFilled	deleteFilled
twitterFilled	twitter
view	view
viewFilled	viewFilled
	warning
	warningFilled
weight	weight
	weightFilled
x	x
xBold	xSmall
xCircle	xCircle
xCircleFilled	xCircleFilled
	zoomIn
	zoomOut
