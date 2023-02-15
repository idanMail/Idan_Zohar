IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'sites')
BEGIN
  CREATE TABLE sites (
    SiteId INT PRIMARY KEY,
    Name VARCHAR(45) NOT NULL,
    Price INT NOT NULL,
    HikingLev VARCHAR(45) NOT NULL,
    Address VARCHAR(45) NOT NULL,
    Location VARCHAR(45) NOT NULL
  );
END;
BEGIN
INSERT INTO sites (SiteId,Name,Price, HikingLev, Address, Location, No, East)
  VALUES 
    	(1	,Kibutzim Stream,	0,	easy,	Nahal Kibbutzim,	North,	32.498933	,35.462568),
	(2	,Zavitan Stream	,24	,medium	,חניון יהודיה	,North	,32.941862,	35.701412),
	(3,	Tavor Stream,	0	,medium,	Shmurat Teva Nakhal Tavor,	North,	32.642739,	35.452497),
	(4,	Ein jonas	,0	,easy,	עין ג'ונס	,North,	32.682117,	35.666355),
	(5	,Ein Shoko,	0	,easy,	e'n shoko,	North,	32.739845,	35.652129),
	(6,	Orvim lake,	0,	easy	,Orvim Eliyon Reservoir	North,	33.139806,	35.733576),
	(7	,Ein vered,	0	,easy,	עין ורדה, משגר	,Center	,31.861482,	34.931683),
	(8,	Mekorot Hayarkon,	0	,easy	,המפל הנסתר שרונית	,Center,	32.125551,	34.89539),
	(9,	Ein bovin,	0,	easy	,מעיין דני	,Center,	31.916248,	35.140107),
	(10,	Prat stream,	25	,hard,	Ein Prat Nature Reserve,	Center,	31.831654,	35.306827),
	(11,	Nikbat Ha-Shilohach	,20	,medium	,Siloam Tunnel	,Center,	31.771765,	35.236311),
	(12	,Beer Abba,	0,	easy,	Be'er Abba,	Center,	32.718851,	35.17005),
	(13	,Tzfira Pool	,0	,hard,	Berekhat Zefira,	South,	31.33742	,35.275752),
	(14,	David Stream,	24,	medium,	Ein Gedi Reserve,	South	,31.466028	,35.394436),
	(15,	Ein Bokek,	0	,medium,	Wadi Bokek,	South,	31.200673,	35.359632)
	(16,	Ein Ovdat,	15,	medium,	Ein Avdat National Park	,South	,30.823162,	34.761998),
	(17,	Ein Akev,	0	,hard,	Ein Akev,	South	,30.813498,	34.812436),
	(18	,Seacret Lake,	0	,medium,	Hidden Lake Timna,	South,	29.765689,	35.001449)
END


