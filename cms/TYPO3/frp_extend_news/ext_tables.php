<?php
$tempColumns = Array (
	'tx_frpextendnews_new_field' => Array (
		"exclude" => 1,
		"label" => "LLL:EXT:frp_extend_news/Resources/Private/Language/locallang_db.xml:tx_frpextendnews_new_field",
		"config" => Array (
			"type" => "input",
			"size" => "30",
			"eval" => "trim",
		)
	),
);

t3lib_div::loadTCA("tx_news_domain_model_news");
t3lib_extMgm::addTCAcolumns("tx_news_domain_model_news",$tempColumns,1);
t3lib_extMgm::addToAllTCAtypes("tx_news_domain_model_news","tx_frpextendnews_new_field;;;;1-1-1");
?>