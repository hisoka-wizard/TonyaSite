"use strict";

app.controller("newsCtrl", function($location, newsF){
    var _public = this;

    _public.ToMain = function(){
        $location.path("/");
    };

    _public.exam_id="0";
    _public.ToExam = function(){
        $location.path("/exam/"+_public.exam_id);
    };

    _public.ToNewsInfo = function(){
        $location.path("/news-info");
    };

    _public.ToLoveStory = function(){
        $location.path("/love-story");
    };

    _public.ToExamResult = function(){
        $location.path("/result");
    };

    _public.ToHarryPotter = function(){
        $location.path("/lib_HP");
    };
    _public.Articles = newsF;

    newsF.draw_image(10,20);
});

app.factory("newsF", function(){
    var Articles = {};

    Articles["TonyaMainInfo"] = {
        Title : "Эксклюзив!!! Волшебница, которая покорила мир, она среди нас!",
        Body : "Эта история посвящается самой великолепной девушке на свете! Речь идет о Тонечке Матюхиной. Тонечке сейчас 19 лет, и это одна из самых умных девушек, с которыми мне доводилось" +
        " общаться. Тонечка родилась на севере, на крайнем севере, в городе Североморске. Что можно сказать о тех краях? Север суровый. Зима долгая и холодная, начинается в октябре и" +
        "заканчивается в апреле-мае, все остальное время в лучшем случае весна-осень. Люди там не ходят в футболках и майках, не загорают на солнышке, и греются с помощью теплой одежды, " +
        "теплых домов, ну а кто-то с помощью алкоголя. Но даже в таком суровом краю может появиться на свет такое Солнышко, как Тонечка. Кстати, раз уж затронули вопрос рождения, поговорим немного" +
        "о родителях нашей Антонины. Мама Тони - Матюхина Валентина Васильевна, папа - Матюхин Сергей Алексеевич, оба работали в составе вооруженных сил РФ на момент рождения Тони. Сергей Алексеевич" +
        "в звании капитана 2-го ранга, на должности начальника производственного отдела, Валентина Васильевна в звании старшины, на должности главного бухгалтера. Хочу также уделить немного времени" +
        " родственникам Тони. Начнем с того, что Тонин папа из Санкт-Петербурга, и там же живет его отец, Тонин дедушка. Насколько мне известно, со стороны отца, у Тони нет больше близких родственников." +
        " Тонина мама родом с Украины, ну вы и сами понимаете, что это значит! А именно, что со стороны мамы у Тони очень большая родня. Часть этих родсвенников живет на Украине, часть в городе Балтийске." +
        " Не хочу углубляться в подробности, так как я с ними еще лично не знаком, хотя однажды в Санкт-Петербург приезжал муж, дочки, одной из сестер Тониной мамы, о как сложно, ну в целом я уже " +
        "много о них слышал, и когда-нибудь мы туда в любом случае поедем, так что все равно еще успею познакомиться. Семья Тонечки жила в то время в " +
        "поселке городского типа Росляково, это был закрытый военный городок. Сейчас это уже открытая террритория и можно без опаски писать о ней. Тонечка ходила там в детский садик. Я когда впервые" +
        " увидел ее, такой малюткой, да еще и в шубке, да, да, там почти всегда ходят в шубе, это было очень мило. Я смотрел и видел шубку с личиком, которая бегала рядом с родителями, и пыталась " +
        "тащить санки, милота неописуемая. После севера семья Тонечки переехала на не столь отдаленный юг, в город Санкт-Петербург, где я с ней собственно говоря и познакомился. В Санкт-Петербурге " +
        "Тоня поступила в школу, получила в ней обязательное среднее-общее образование, закончила 9 класс с идеальным аттестатом. Все на ОТЛИЧНО! После 9 класса Тоня поступила в Пожарно-спасательный колледж" +
        " СПб. 'центр подготовки спасателей', на специальность 'экология'. Тоня считала эту профессию очень полезной и значимой, на самом деле она и сейчас так считает, и я с ней полностью согласен." +
        " Жаль, что в нашей стране вопросам экологии и техносферной безопасности отводоят второстепенную роль, и не задумываются, что рано или поздно станет уже нечего защищать и оберегать! Но не будем " +
        "о грустном... Тонечка закончила колледж, как и ожидалось с красным дипломом. Кстати, к слову, я с ней познакомился, и поуши в нее влюбился, когда она училась на последнем курсе колледжа." +
        "После колледжа Тонечка поступила в университет 'Технологии и дизайна' на специальность 'техносферная безопасность', на факультет экологии. На данный момент она является студенткой вечерного" +
        " отделения. Что еще можно сказать про основные моменты из жизни Тони? Ну, в целом, в данном повествовании, я закончу. "
    };

    Articles["TonyaParamsAndSkills"] = {
        Title : "Красота и ум в одном целом.",
        Body: "Вот, просыпаюсь я каждый день утром, и первым делом смортрю на Тонечку, что она рядышком, и с енй все хорошо. Целую ее, и уже наверняка знаю, что день прожит не зря. А если подумать" +
        "ведь я люблю ее очень сильно, не за ее внешность, ведь она не топ-модель, с идеальнейшей фигурой, длиннющими ногами и идеальными чертами лица. Тонечка на самом деле очень красивая девушка, " +
        "она такая, какая мне нужна. Такая миленькая, миниатюрная, длинноволосая, нежная, ходит на занятиях в очках, выглядит как школьница в аниме, ну что сказать, я люблю именно такую внешеность у" +
        "девушек, и я свою из бесконечного множества встретил! Но как я уже говорил, Тонина внешность не первое, что так сильно привлекло мое к ней внимание, хоть и внешность тоже является важным фактором " +
        "в жизни, это все-таки был ее острый, и очень логичный для девушки 17 лет, ей был 17 когда мы познакомились, ум! Когда мы начали общаться, меня очень удивило, как рационально и виртуозно она" +
        "оперировала теми темами, которые, как я думал, для девушек не слишком понятны и интересны. Ко всему прочему, я быстро выяснил, что Тоня очень разносторонний человек. Она имеет аналитический склад" +
        "ума, умеет анализировать, учится в техническом направлении, обладает очень впечетляющей памятью(правда запоминает, в основном, всякую ерунду, но тем не менее), играет в оркесте, причем " +
        "играет как на аккордионе, так и на фортепиано, и вообще она очень музыкальная. Вот если я дам ей послушать какой-нибудь мотив, она сразу может его воспроизвести голосом, и напоет, и более " +
        "того сможет наиграть на музыкальном инстументе. При мне это был детский ксилофон, и я был в шоке! Было очень круто, я уверен она на любом инструменте сможет играть, если захочет! Также, Тоня " +
        "отлично справляется с компьютером, действительно могу назвать ее уверенным пользователем, а я могу судить, я программист. В общем и в целом, я влюбился в умную, красивую, милую девушку, а сейчас " +
        "изменилось лишь то, что она теперь еще и самая родная! Хочу, кстати, пробежаться по некоторым ее параметрам: Рост: 153см(моя кроха); Вес: не скажу, хотя он никогда не превышает 45кг, так что все " +
        "равно она кроха; Волосы: русые, длинные, и очень красивые, обожаю ее волосы; Глазки: янтарно-зеленые, и очень озорные!!!"
    };

    Articles["TonyaSchool"] = {
        Title : "Школьные годы Тони",
        Body: "Я знаю про ее школьные годы не так уж и много. Точно знаю только то, что Тонечка отлично их проводила! Она и развлекалась, и заводила друзей, и играла в оркестре, и влюблялась, и не забывала" +
        " при этом еще и отлично учиться! За время проведенное в школе, Тоня познакомилась и подружилась с ребятами, которых и я теперь знаю, и дружу с ними! Самое для меня удивительное, то, что девочки" +
        "так легко находят общий язык с парнями, ее лучшие друзья, Гоша, Паша, Вадим(правда Вадим ей нравился, и он с оркеста, и мой ровестник), хм..., что-то уж совсем одни парни. На самом деле подруги" +
        "у нее появились в колледже, а со школы осались только знакомые. Тоня мне много рассказывала про ее школьные приключения, и я не буду о них рассказывать, так как это все-таки довольно личные вещи, " +
        "и я не хочу, что-бы о них было известно всем, а здесь есть только то, что Тоня и так всем бы рассказала! Из интересных и веселых событий в школьные годы, Тоня столкнулась с такими вещами как кино и " +
        "книги! Я скажу сразу, это наш с ней камень преткновения, и одна из немаловыжных частей наших взаимоотношений, да вы и сами все видите, на этом сайте, это та самая франшиза - 'Гарри Поттер'! Да, Тоня" +
        " очень любит Гарри Поттер, как собственно и я) Но помимо Гарри Поттера, в школьные годы она столкнулась с такой вещью как 'Сумерки'. Не скрою, я и сам их прочтиал и посмотрел, но у девочек, как только" +
        " это вампиро-любовное кино появилось снесло крышу под самый фундамент, и я немало об этом был наслышан! Ах да, еще Тоня училась музыке, помимо обычной учебы, и играла в оркестре! Оркестр для Тони - это " +
        "немалая часть ее жизни. Она до сих пор ставит его превыше многого, не всегда мне это нравится, но я очень рад, что она так что-то любит и грезит этим! А также Тонечка побывала почти во всей европе, пока" +
        "в оркестре в школьные годы."
    };

    return Articles;
});