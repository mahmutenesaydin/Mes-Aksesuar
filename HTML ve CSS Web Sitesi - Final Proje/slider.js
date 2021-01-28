$(document).ready(function()
{
	var liSayisi = $(".slider .images li").length;
	var aktif = 0;
	$(".slider .pages li").hover(function()
	{
		var indis = $(this).index();
		$(".slider .images li").hide();
		$(".slider .pages li a").removeClass("active");
		
		$(".slider .images li:eq("+indis+")").show();
		$(".slider .pages li:eq("+indis+") a").addClass("active");
		aktif = indis;
	});
	
	var dondur = setInterval(function()
	{
		$(".slider .images li").hide();
		$(".slider .pages li a").removeClass("active");
		if(aktif >= liSayisi-1)
		{
			aktif = 0;
		}
		else
		{
			aktif += 1;
		}
		$(".slider .images li:eq("+aktif+")").show();
		$(".slider .pages li:eq("+aktif+")a").addClass("active");
	},2000);
	
	$("slider").hover(function()
	{
		clearInterval(dondur);
	},function()
	{
		dondur = setInterval(function()
		{
			$(".slider .images li").hide();
			$(".slider .pages li a").removeClass("active");
			if(aktif >= liSayisi-1)
			{
				aktif = 0;
			}
			else
			{
				aktif += 1;
			}
			$(".slider .images li:eq("+aktif+")").show();
			$(".slider .pages li:eq("+aktif+") a").addClass("active");
		},2000);
	});
});













