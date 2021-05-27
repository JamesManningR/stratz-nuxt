export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Byte: any;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
  Decimal: any;
  Guid: any;
  Long: any;
  Short: any;
  UShort: any;
};

export type AbilityActiveListType = {
  __typename?: 'AbilityActiveListType';
  ability0?: Maybe<Scalars['Short']>;
  ability1?: Maybe<Scalars['Short']>;
  ability2?: Maybe<Scalars['Short']>;
  ability3?: Maybe<Scalars['Short']>;
  ability4?: Maybe<Scalars['Short']>;
  ability5?: Maybe<Scalars['Short']>;
  ability6?: Maybe<Scalars['Short']>;
  ability7?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
};

export type AbilityAttributeType = {
  __typename?: 'AbilityAttributeType';
  linkedSpecialBonusAbilityId?: Maybe<Scalars['Short']>;
  name?: Maybe<Scalars['String']>;
  requiresScepter: Scalars['Boolean'];
  value?: Maybe<Scalars['String']>;
};

export type AbilityCustomGameLanguageType = {
  __typename?: 'AbilityCustomGameLanguageType';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type AbilityCustomGameType = {
  __typename?: 'AbilityCustomGameType';
  abilityName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Short']>;
  language?: Maybe<AbilityCustomGameLanguageType>;
  name?: Maybe<Scalars['String']>;
};

export type AbilityLanguageType = {
  __typename?: 'AbilityLanguageType';
  aghanimDescription?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  lore?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Scalars['String']>>>;
  shardDescription?: Maybe<Scalars['String']>;
};

export type AbilityLearnEventsType = {
  __typename?: 'AbilityLearnEventsType';
  abilityId?: Maybe<Scalars['Short']>;
  isMaxLevel?: Maybe<Scalars['Boolean']>;
  isTalent?: Maybe<Scalars['Boolean']>;
  isUltimate?: Maybe<Scalars['Boolean']>;
  level: Scalars['Int'];
  levelObtained: Scalars['Int'];
  time: Scalars['Int'];
};

export type AbilityStatType = {
  __typename?: 'AbilityStatType';
  abilityId?: Maybe<Scalars['Short']>;
  behavior?: Maybe<Scalars['Long']>;
  castPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  castRange?: Maybe<Array<Maybe<Scalars['Int']>>>;
  castRangeBuffer?: Maybe<Array<Maybe<Scalars['Int']>>>;
  channelTime?: Maybe<Array<Maybe<Scalars['Float']>>>;
  chargeRestoreTime?: Maybe<Scalars['String']>;
  charges?: Maybe<Scalars['String']>;
  cooldown?: Maybe<Array<Maybe<Scalars['Float']>>>;
  damage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  displayAdditionalHeroes?: Maybe<Scalars['Boolean']>;
  duration?: Maybe<Scalars['String']>;
  fightRecapLevel?: Maybe<Scalars['Short']>;
  hasScepterUpgrade?: Maybe<Scalars['Boolean']>;
  hotKeyOverride?: Maybe<Scalars['String']>;
  isGrantedByScepter?: Maybe<Scalars['Boolean']>;
  isGrantedByShard?: Maybe<Scalars['Boolean']>;
  isOnCastbar?: Maybe<Scalars['Boolean']>;
  isOnLearnbar?: Maybe<Scalars['Boolean']>;
  isUltimate?: Maybe<Scalars['Boolean']>;
  levelsBetweenUpgrades?: Maybe<Scalars['Byte']>;
  manaCost?: Maybe<Array<Maybe<Scalars['Float']>>>;
  maxLevel?: Maybe<Scalars['Byte']>;
  modifierSupportBonus?: Maybe<Scalars['Short']>;
  modifierSupportValue?: Maybe<Scalars['Float']>;
  requiredLevel?: Maybe<Scalars['Byte']>;
  spellImmunity?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  unitDamageType?: Maybe<Scalars['Int']>;
  unitTargetFlags?: Maybe<Scalars['Long']>;
  unitTargetTeam?: Maybe<Scalars['Int']>;
  unitTargetType?: Maybe<Scalars['Long']>;
};

export type AbilityType = {
  __typename?: 'AbilityType';
  attributes?: Maybe<Array<Maybe<AbilityAttributeType>>>;
  drawMatchPage?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Short']>;
  isTalent?: Maybe<Scalars['Boolean']>;
  language?: Maybe<AbilityLanguageType>;
  name?: Maybe<Scalars['String']>;
  stat?: Maybe<AbilityStatType>;
  uri?: Maybe<Scalars['String']>;
};

export type AbilityUsedEventsType = {
  __typename?: 'AbilityUsedEventsType';
  abilityId?: Maybe<Scalars['Short']>;
  attacker?: Maybe<Scalars['Short']>;
  target?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
};

export type AdminMutation = {
  __typename?: 'AdminMutation';
  deleteProSteamAccount?: Maybe<Scalars['Boolean']>;
  mergeProSteamAccount?: Maybe<Scalars['Boolean']>;
};


export type AdminMutationDeleteProSteamAccountArgs = {
  request: DeleteProSteamAccountRequestType;
};


export type AdminMutationMergeProSteamAccountArgs = {
  request: Array<Maybe<MergeProSteamAccountRequestType>>;
};

export type AdminQuery = {
  __typename?: 'AdminQuery';
  apiMemoryReport?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssistDetailType = {
  __typename?: 'AssistDetailType';
  attacker?: Maybe<Scalars['Short']>;
  gold?: Maybe<Scalars['Int']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  subTime?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
  xp?: Maybe<Scalars['Int']>;
};

export enum BasicRegionType {
  China = 'CHINA',
  Sea = 'SEA',
  NorthAmerica = 'NORTH_AMERICA',
  SouthAmerica = 'SOUTH_AMERICA',
  Europe = 'EUROPE'
}

export type BlogMetaTagInfoType = {
  __typename?: 'BlogMetaTagInfoType';
  id?: Maybe<Scalars['Short']>;
  name: Scalars['String'];
};

export type BlogMetaTagType = {
  __typename?: 'BlogMetaTagType';
  blogId?: Maybe<Scalars['Byte']>;
  blogMetaTagTypeId?: Maybe<Scalars['Short']>;
  id?: Maybe<Scalars['Byte']>;
  metaTag?: Maybe<BlogMetaTagInfoType>;
};

export type BlogType = {
  __typename?: 'BlogType';
  bannerImageUrl: Scalars['String'];
  captainJackIdentityId?: Maybe<Scalars['Guid']>;
  data: Scalars['String'];
  id?: Maybe<Scalars['Byte']>;
  link: Scalars['String'];
  liveDateTime?: Maybe<Scalars['DateTime']>;
  metaTags?: Maybe<Array<Maybe<BlogMetaTagType>>>;
  poster?: Maybe<SteamAccountType>;
  title: Scalars['String'];
};

export enum BuildingType {
  Fort = 'FORT',
  Tower = 'TOWER',
  Barracks = 'BARRACKS',
  Healer = 'HEALER',
  Outpost = 'OUTPOST'
}

export type BuyBackDetailType = {
  __typename?: 'BuyBackDetailType';
  cost: Scalars['Int'];
  deathTimeRemaining: Scalars['Int'];
  heroId?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
};


export type CaptainJackIdentityPrivateProfileType = {
  __typename?: 'CaptainJackIdentityPrivateProfileType';
  captainJackIdentityId?: Maybe<Scalars['Guid']>;
  dailyEmail: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  emailHour?: Maybe<Scalars['Byte']>;
  emailLevel?: Maybe<Scalars['Byte']>;
  emailValidationCode?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  feedLevel?: Maybe<Scalars['Byte']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEmailValidated: Scalars['Boolean'];
  languageId?: Maybe<Scalars['Byte']>;
  lastDailyEmail?: Maybe<Scalars['Long']>;
  lastLeagueDailyEmail?: Maybe<Scalars['Long']>;
  lastMonthlyEmail?: Maybe<Scalars['Long']>;
  lastProCircuitDailyEmail?: Maybe<Scalars['Long']>;
  lastReadFeedTime?: Maybe<Scalars['Long']>;
  lastSeen?: Maybe<Scalars['Long']>;
  lastTeamDailyEmail?: Maybe<Scalars['Long']>;
  lastWeeklyEmail?: Maybe<Scalars['Long']>;
  monthlyEmail: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  premiumEndDate?: Maybe<Scalars['Long']>;
  proCircuitEmailLevel?: Maybe<Scalars['Byte']>;
  proCircuitFeedLevel?: Maybe<Scalars['Byte']>;
  themeType?: Maybe<Scalars['Byte']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  unsubscribeCode?: Maybe<Scalars['String']>;
  weeklyEmail: Scalars['Boolean'];
  youTube?: Maybe<Scalars['String']>;
};

export type CaptainJackIdentityProfileUpdateRequestType = {
  email?: Maybe<Scalars['String']>;
  feedLevel?: Maybe<Scalars['Byte']>;
  emailLevel?: Maybe<Scalars['Byte']>;
  dailyEmail?: Maybe<Scalars['Boolean']>;
  weeklyEmail?: Maybe<Scalars['Boolean']>;
  monthlyEmail?: Maybe<Scalars['Boolean']>;
  proCircuitFeedLevel?: Maybe<Scalars['Byte']>;
  proCircuitEmailLevel?: Maybe<Scalars['Byte']>;
  themeType?: Maybe<Scalars['Byte']>;
  languageId?: Maybe<Scalars['Byte']>;
  emailHour?: Maybe<Scalars['Byte']>;
  isStratzAnonymous?: Maybe<Scalars['Byte']>;
};

export type CaptainJackIdentityPublicProfileType = {
  __typename?: 'CaptainJackIdentityPublicProfileType';
  captainJackIdentityId?: Maybe<Scalars['Guid']>;
  facebook?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youTube?: Maybe<Scalars['String']>;
};

export type CaptainJackIdentityType = {
  __typename?: 'CaptainJackIdentityType';
  id?: Maybe<Scalars['Guid']>;
  profile?: Maybe<CaptainJackIdentityPublicProfileType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['String']>;
};

export type ClusterType = {
  __typename?: 'ClusterType';
  /** ClusterId which determines in which region a match was played. One region has multiple clusters. When selecting your region in the Dota 2 client, a random cluster is provided to you for each match for load balancing purposes. */
  id?: Maybe<Scalars['Int']>;
  /** RegionId gives the exact geographical area where the match is played. */
  regionId?: Maybe<Scalars['Short']>;
};

export type ConstantQuery = {
  __typename?: 'ConstantQuery';
  /** Find ability details. */
  abilities?: Maybe<Array<Maybe<AbilityType>>>;
  /** Find ability details by ability id. id is a required input field. */
  ability?: Maybe<AbilityType>;
  /** Provided directly from Dota 2 Region files, the cluster is the geographically breakdown of where the game is played. */
  clusters?: Maybe<Array<Maybe<ClusterType>>>;
  /** Find all abilities that are used in custom events. For example Aghnims Labyrinth. */
  customAbilities?: Maybe<Array<Maybe<AbilityCustomGameType>>>;
  /** Returns a list of game mode types which is directly supplied by Dota 2. Matches API call will have a input for this value. */
  gameModes?: Maybe<Array<Maybe<GameModeType>>>;
  /** Find game version details by game version id. id is a required input field. */
  gameVersion?: Maybe<GameVersionType>;
  /** Find game version details. */
  gameVersions?: Maybe<Array<Maybe<GameVersionType>>>;
  hero?: Maybe<HeroType>;
  /** Find hero details. */
  heroes?: Maybe<Array<Maybe<HeroType>>>;
  /** Find item details by item id. id is a required input field. */
  item?: Maybe<ItemType>;
  /** Find item details. */
  items?: Maybe<Array<Maybe<ItemType>>>;
  /** Returns a list of lobby types which are mirrored from the Dota 2 client. */
  lobbyTypes?: Maybe<Array<Maybe<LobbyTypeType>>>;
  /** Find all modifiers that are used in the game. If you find a bug on a modifier, let us know as we have to control this ourselves. */
  modifiers?: Maybe<Array<Maybe<ModifierType>>>;
  /** Find npc details by npc id. id is a required input field. */
  npc?: Maybe<NpcType>;
  /** Find npc details. */
  npcs?: Maybe<Array<Maybe<NpcType>>>;
  /** Find all patch notes for each item and ability. These are found when you hover over each object in-game. */
  patchNotes?: Maybe<Array<Maybe<PatchNoteLanguageType>>>;
  /** Returns a list of region details and an Id for reference. */
  regions?: Maybe<Array<Maybe<RegionType>>>;
  /** List of all the roles types for heroes. */
  roles?: Maybe<Array<Maybe<HeroRoleType>>>;
};


export type ConstantQueryAbilitiesArgs = {
  gameVersionId?: Maybe<Scalars['Short']>;
  language?: Maybe<Language>;
};


export type ConstantQueryAbilityArgs = {
  id: Scalars['Int'];
  gameVersionId?: Maybe<Scalars['Short']>;
  language?: Maybe<Language>;
};


export type ConstantQueryCustomAbilitiesArgs = {
  languageId?: Maybe<Language>;
};


export type ConstantQueryGameVersionArgs = {
  id: Scalars['Short'];
};


export type ConstantQueryHeroArgs = {
  id: Scalars['Short'];
  gameVersionId?: Maybe<Scalars['Short']>;
  language?: Maybe<Language>;
};


export type ConstantQueryHeroesArgs = {
  gameVersionId?: Maybe<Scalars['Short']>;
  language?: Maybe<Language>;
};


export type ConstantQueryItemArgs = {
  id: Scalars['Int'];
  gameVersionId?: Maybe<Scalars['Short']>;
  language?: Maybe<Language>;
};


export type ConstantQueryItemsArgs = {
  gameVersionId?: Maybe<Scalars['Short']>;
  language?: Maybe<Language>;
};


export type ConstantQueryModifiersArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type ConstantQueryNpcArgs = {
  id: Scalars['Short'];
  gameVersionId?: Maybe<Scalars['Short']>;
};


export type ConstantQueryNpcsArgs = {
  gameVersionId?: Maybe<Scalars['Short']>;
};


export type ConstantQueryPatchNotesArgs = {
  languageId?: Maybe<Language>;
};

export enum Damage {
  Physical = 'PHYSICAL',
  Magical = 'MAGICAL',
  Pure = 'PURE'
}


export type DeathDetailType = {
  __typename?: 'DeathDetailType';
  assist?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attacker?: Maybe<Scalars['Short']>;
  byAbility?: Maybe<Scalars['Short']>;
  byItem?: Maybe<Scalars['Short']>;
  goldFed?: Maybe<Scalars['Int']>;
  goldLost?: Maybe<Scalars['Int']>;
  hasHealAvailable?: Maybe<Scalars['Boolean']>;
  isAttemptTpOut?: Maybe<Scalars['Boolean']>;
  isBurst?: Maybe<Scalars['Boolean']>;
  isDieBack?: Maybe<Scalars['Boolean']>;
  isEngagedOnDeath?: Maybe<Scalars['Boolean']>;
  isFeed?: Maybe<Scalars['Boolean']>;
  isFromIllusion?: Maybe<Scalars['Boolean']>;
  isTracked?: Maybe<Scalars['Boolean']>;
  isWardWalkThrough?: Maybe<Scalars['Boolean']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  reliableGold?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
  timeDead?: Maybe<Scalars['Int']>;
  unreliableGold?: Maybe<Scalars['Int']>;
  xpFed?: Maybe<Scalars['Int']>;
};


export type DeleteProSteamAccountRequestType = {
  steamAccountId?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
};

export type DireTide2020CustomGameHeroWinDayType = {
  __typename?: 'DireTide2020CustomGameHeroWinDayType';
  candyScored: Scalars['Int'];
  day: Scalars['Long'];
  heroId: Scalars['Short'];
  matchCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type DireTide2020CustomGameMatchType = {
  __typename?: 'DireTide2020CustomGameMatchType';
  candyLost?: Maybe<Scalars['Short']>;
  candyPickedUp?: Maybe<Scalars['Short']>;
  candyScored?: Maybe<Scalars['Short']>;
  clusterId?: Maybe<Scalars['Short']>;
  didRadiantWin?: Maybe<Scalars['Boolean']>;
  direCandyScored?: Maybe<Scalars['Short']>;
  durationSeconds?: Maybe<Scalars['Short']>;
  endDateTime?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  players?: Maybe<Array<Maybe<DireTide2020CustomGamePlayerType>>>;
  radiantCandyScored?: Maybe<Scalars['Short']>;
  replaySalt?: Maybe<Scalars['Long']>;
  startDateTime?: Maybe<Scalars['Long']>;
};


export type DireTide2020CustomGameMatchTypePlayersArgs = {
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type DireTide2020CustomGamePlayerType = {
  __typename?: 'DireTide2020CustomGamePlayerType';
  assists?: Maybe<Scalars['Byte']>;
  backpack0Id?: Maybe<Scalars['Short']>;
  backpack1Id?: Maybe<Scalars['Short']>;
  backpack2Id?: Maybe<Scalars['Short']>;
  candyLost?: Maybe<Scalars['Short']>;
  candyPickedUp?: Maybe<Scalars['Short']>;
  candyScored?: Maybe<Scalars['Short']>;
  deaths?: Maybe<Scalars['Byte']>;
  goldPerMinute?: Maybe<Scalars['Short']>;
  goldSpent?: Maybe<Scalars['Int']>;
  hero?: Maybe<HeroType>;
  heroDamage?: Maybe<Scalars['Int']>;
  heroHealing?: Maybe<Scalars['Int']>;
  heroId?: Maybe<Scalars['Short']>;
  isVictory: Scalars['Boolean'];
  item0Id?: Maybe<Scalars['Short']>;
  item1Id?: Maybe<Scalars['Short']>;
  item2Id?: Maybe<Scalars['Short']>;
  item3Id?: Maybe<Scalars['Short']>;
  item4Id?: Maybe<Scalars['Short']>;
  item5Id?: Maybe<Scalars['Short']>;
  kills?: Maybe<Scalars['Byte']>;
  leaverStatus?: Maybe<Scalars['Byte']>;
  level?: Maybe<Scalars['Byte']>;
  matchId?: Maybe<Scalars['Long']>;
  networth?: Maybe<Scalars['Int']>;
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars['Short']>;
  numLastHits?: Maybe<Scalars['Short']>;
  partyId?: Maybe<Scalars['Byte']>;
  playerSlot?: Maybe<Scalars['Byte']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type DotaMutation = {
  __typename?: 'DotaMutation';
  admin?: Maybe<AdminMutation>;
  user?: Maybe<DotaUserMutation>;
  yogurt?: Maybe<YogurtMutation>;
};

export type DotaNextQuery = {
  __typename?: 'DotaNextQuery';
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  ally?: Maybe<Array<Maybe<DotaNextWithAllyType>>>;
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  enemy?: Maybe<Array<Maybe<DotaNextWithAllyType>>>;
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  playerHero?: Maybe<Array<Maybe<Array<Maybe<MatchPlayerItemPurchaseEventType>>>>>;
};


export type DotaNextQueryAllyArgs = {
  steamAccountIds: Array<Maybe<Scalars['Long']>>;
  matchSteamAccountId: Scalars['Long'];
};


export type DotaNextQueryEnemyArgs = {
  steamAccountIds: Array<Maybe<Scalars['Long']>>;
  matchSteamAccountId: Scalars['Long'];
};


export type DotaNextQueryPlayerHeroArgs = {
  steamAccountId: Scalars['Long'];
  heroId?: Maybe<Scalars['Short']>;
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  limitByItemIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startDateTime?: Maybe<Scalars['Long']>;
};

export type DotaNextWithAllyType = {
  __typename?: 'DotaNextWithAllyType';
  lifetimeMatchCount?: Maybe<Scalars['Int']>;
  lifetimeWinMatchCount?: Maybe<Scalars['Int']>;
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type DotaPlusWeekType = {
  __typename?: 'DotaPlusWeekType';
  active?: Maybe<Scalars['Int']>;
  expired?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Long']>;
};

export type DotaQuery = {
  __typename?: 'DotaQuery';
  /** Queries used to query constants in Dota. */
  constants?: Maybe<ConstantQuery>;
  /** For getting access to one specific Guild which was used at the start of TI10 Compendium. */
  guild?: Maybe<GuildType>;
  /** Queries used to gain insights into hero data and statistics. */
  heroStats?: Maybe<HeroStatsQuery>;
  /** Queries used to get leaderboard information. */
  leaderboard?: Maybe<LeaderboardQuery>;
  /** Find league details by league Id. Id is a required field. */
  league?: Maybe<LeagueType>;
  /** Find league details by searching for leagues using a LeagueRequest. */
  leagues?: Maybe<Array<Maybe<LeagueType>>>;
  /** Queries used to find live match data. */
  live?: Maybe<LiveQuery>;
  /** Find match details by the match id. id is a required input field. */
  match?: Maybe<MatchType>;
  /** Find match details for each match id. ids is a required input field. */
  matches?: Maybe<Array<Maybe<MatchType>>>;
  /** Find player details by steam account id. id is a required input field. */
  player?: Maybe<PlayerType>;
  /** Find player details for each steam account id. ids is a required input field. */
  players?: Maybe<Array<Maybe<PlayerType>>>;
  /** Queries used to populate Stratz Plus. */
  plus?: Maybe<PlusQuery>;
  /** Stratz specific queries. */
  stratz?: Maybe<StratzQuery>;
  /** More in depth look at a specific team */
  team?: Maybe<TeamType>;
  /** Results in a list of team objects that contain data about them and their players. */
  teams?: Maybe<Array<Maybe<TeamType>>>;
  /** Queries used by 3rd party applications. */
  vendor?: Maybe<VendorQuery>;
  /** Queries used for Stratz Yogurt - users won't be able to access these calls until they have access to the app. */
  yogurt?: Maybe<YogurtQuery>;
};


export type DotaQueryGuildArgs = {
  id: Scalars['Int'];
};


export type DotaQueryLeagueArgs = {
  id: Scalars['Int'];
};


export type DotaQueryLeaguesArgs = {
  request: LeagueRequestType;
};


export type DotaQueryMatchArgs = {
  id: Scalars['Long'];
};


export type DotaQueryMatchesArgs = {
  ids: Array<Maybe<Scalars['Long']>>;
};


export type DotaQueryPlayerArgs = {
  steamAccountId: Scalars['Long'];
};


export type DotaQueryPlayersArgs = {
  steamAccountIds: Array<Maybe<Scalars['Long']>>;
};


export type DotaQueryTeamArgs = {
  teamId: Scalars['Int'];
};


export type DotaQueryTeamsArgs = {
  teamIds: Array<Maybe<Scalars['Int']>>;
};

export type DotaSubscription = {
  __typename?: 'DotaSubscription';
  feedLive?: Maybe<LiveEventType>;
  matchCount?: Maybe<TotalMatchCountType>;
  playerCount?: Maybe<TotalPlayerCountType>;
  yogurtUpload?: Maybe<MatchReplayUpdateType>;
};


export type DotaSubscriptionYogurtUploadArgs = {
  bearer: Scalars['String'];
  matchReplayUploadTeamId: Scalars['Int'];
};

export type DotaUserMutation = {
  __typename?: 'DotaUserMutation';
  /** Update your user to unsubscribe from Stratz emails. */
  emailUnsubscribe?: Maybe<UserHomepageType>;
  /** Update your user to (un)follow a specific LeagueId */
  followLeague?: Maybe<Scalars['Boolean']>;
  /** Update your user to (un)follow a specific SteamAccountId */
  followPlayer?: Maybe<Scalars['Boolean']>;
  /** Marks the user's LastReadFeedTime to the current time. */
  readAllFeed?: Maybe<Scalars['Boolean']>;
  /** Update your user to (un)follow a specific LeagueId */
  unfollowLeague?: Maybe<Scalars['Boolean']>;
  /** Update your user to (un)follow a specific SteamAccountId */
  unfollowPlayer?: Maybe<Scalars['Boolean']>;
  /** Updates every user you are following.  This should be handled with care, as this overrides all your predefinded user specific settings with these settings. */
  updateAllFollowing?: Maybe<Scalars['Boolean']>;
  /** Gets more in-depth information about the person you are following.  This is a user specific request, and you can only edit yourself. */
  updateFollowing?: Maybe<Scalars['Boolean']>;
  /** Gets more in-depth information about the person you are following.  This is a user specific request, and you can only edit yourself. */
  updateFollowingFavorite?: Maybe<Scalars['Boolean']>;
  /** Updates the logged in user information profile. */
  updateProfile?: Maybe<Scalars['Boolean']>;
  /** Completes a tutorial for the logged in user. */
  updateTutorial?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** Validates a user email address if the password id is correct. */
  validateEmail?: Maybe<Scalars['Boolean']>;
};


export type DotaUserMutationFollowLeagueArgs = {
  leagueId: Scalars['Int'];
};


export type DotaUserMutationFollowPlayerArgs = {
  steamAccountId: Scalars['Long'];
};


export type DotaUserMutationUnfollowLeagueArgs = {
  leagueId: Scalars['Int'];
};


export type DotaUserMutationUnfollowPlayerArgs = {
  steamAccountId: Scalars['Long'];
};


export type DotaUserMutationUpdateAllFollowingArgs = {
  request: UpdateFollowerRequestType;
};


export type DotaUserMutationUpdateFollowingArgs = {
  followedSteamAccountId: Scalars['Long'];
  request: UpdateFollowerRequestType;
};


export type DotaUserMutationUpdateFollowingFavoriteArgs = {
  followedSteamAccountId: Scalars['Long'];
  isFavorite: Scalars['Boolean'];
};


export type DotaUserMutationUpdateProfileArgs = {
  request: CaptainJackIdentityProfileUpdateRequestType;
};


export type DotaUserMutationUpdateTutorialArgs = {
  tutorialId: Scalars['Short'];
};


export type DotaUserMutationValidateEmailArgs = {
  code: Scalars['Guid'];
};

export type ExperienceDetailType = {
  __typename?: 'ExperienceDetailType';
  amount: Scalars['Int'];
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  reason?: Maybe<XpReason>;
  time: Scalars['Int'];
};

export type FeedResponseType = {
  __typename?: 'FeedResponseType';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<FeedType>>>;
  date?: Maybe<Scalars['DateTime']>;
};

export type FeedType = {
  __typename?: 'FeedType';
  date?: Maybe<Scalars['Long']>;
  didWin?: Maybe<Scalars['Boolean']>;
  heroId: Scalars['Int'];
  league?: Maybe<LeagueType>;
  matchId?: Maybe<Scalars['Long']>;
  steamAccount?: Maybe<SteamAccountType>;
  targetSteamAccountId?: Maybe<Scalars['Long']>;
  type?: Maybe<Scalars['Byte']>;
  value: Scalars['Int'];
};

export enum FilterDireTide2020CustomGameMatchOrderBy {
  CandyScored = 'CANDY_SCORED',
  EndDateTime = 'END_DATE_TIME'
}

export type FilterDireTide2020CustomMatchRequestType = {
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: Maybe<Scalars['Long']>;
  /** The order in which the data returned will be sorted by. */
  orderBy?: Maybe<FilterDireTide2020CustomGameMatchOrderBy>;
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: Maybe<FilterOrder>;
  /** The amount to have returned in your query. */
  take?: Maybe<Scalars['Int']>;
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
};

export enum FilterHeroWinRequestGroupBy {
  HeroId = 'HERO_ID',
  All = 'ALL'
}

export enum FilterLeaderboardGuildOrderBy {
  BattlePassLevels = 'BATTLE_PASS_LEVELS',
  MemberCount = 'MEMBER_COUNT',
  Points = 'POINTS',
  Id = 'ID',
  PreviousWeekRank = 'PREVIOUS_WEEK_RANK'
}

export type FilterLeaderboardGuildRequestType = {
  /** What field to order the data by. Enum values. */
  orderBy?: Maybe<FilterLeaderboardGuildOrderBy>;
  /** If the return should be ordered by Ascending or Desending order. */
  order?: Maybe<FilterOrder>;
  /** The region where the guild was registered. */
  region?: Maybe<Scalars['Byte']>;
  /** If the guild is current set to 50 members. */
  isFull?: Maybe<Scalars['Boolean']>;
  /** If anyone is able to join the guild. */
  isUnlocked?: Maybe<Scalars['Boolean']>;
  /** The minimum amount of members a guild must have. */
  minMemberCount?: Maybe<Scalars['Byte']>;
  /** The max amount of members a guild can have. */
  maxMemberCount?: Maybe<Scalars['Byte']>;
  /** The amount of members a guild must have. */
  memberCount?: Maybe<Scalars['Byte']>;
  /** The language required to join the guild. */
  language?: Maybe<Scalars['Byte']>;
  /** The guild was created before this date time (in Unix TimeStamp). */
  createdBeforeDateTime?: Maybe<Scalars['Long']>;
  /** The guild was created after this date time (in Unix TimeStamp). */
  createdAfterDateTime?: Maybe<Scalars['Long']>;
  /** The rank required to join the guild. */
  minRequiredRank?: Maybe<Scalars['Byte']>;
  /** The rank required to join the guild. */
  maxRequiredRank?: Maybe<Scalars['Byte']>;
  /** The amount to have returned in your query. */
  take?: Maybe<Scalars['Int']>;
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
};

export type FilterLeaderboardHeroRequestType = {
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** The amount to have returned in your query. */
  take?: Maybe<Scalars['Int']>;
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
};

export enum FilterLeaderboardOrder {
  Recent = 'RECENT',
  Level = 'LEVEL',
  First = 'FIRST'
}

export type FilterMatchReplayUploadRequestType = {
  withEnemySteamAccount?: Maybe<Array<Maybe<Scalars['Long']>>>;
  withFriendHeroId?: Maybe<Array<Maybe<Scalars['Short']>>>;
  withEnemyHeroId?: Maybe<Array<Maybe<Scalars['Short']>>>;
  withFriendBannedHeroId?: Maybe<Array<Maybe<Scalars['Short']>>>;
  withEnemyBannedHeroId?: Maybe<Array<Maybe<Scalars['Short']>>>;
  byMatchId?: Maybe<Scalars['Long']>;
  byMatchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  byMatchUploadFileName?: Maybe<Scalars['String']>;
  byMatchUploadUploaderCaptainJackId?: Maybe<Scalars['Guid']>;
  bySteamAccountId?: Maybe<Scalars['Long']>;
  bySteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  byHeroId?: Maybe<Array<Maybe<Scalars['Short']>>>;
  byLeagueId?: Maybe<Scalars['Int']>;
  bySeriesId?: Maybe<Scalars['Int']>;
  bySeriesIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  byTeamId?: Maybe<Scalars['Int']>;
  byGameMode?: Maybe<Array<Maybe<Scalars['Int']>>>;
  byLobbyType?: Maybe<Array<Maybe<Scalars['Int']>>>;
  byGameVersion?: Maybe<Array<Maybe<Scalars['Int']>>>;
  isLeague?: Maybe<Scalars['Boolean']>;
  isValidated?: Maybe<Scalars['Boolean']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isVictory?: Maybe<Scalars['Boolean']>;
  isRadiant?: Maybe<Scalars['Boolean']>;
  minDuration?: Maybe<Scalars['Int']>;
  maxDuration?: Maybe<Scalars['Int']>;
  minGameVersionId?: Maybe<Scalars['Int']>;
  maxGameVersionId?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['Long']>;
  endDateTime?: Maybe<Scalars['Long']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum FilterOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum FilterOrderBy {
  LastMatchTime = 'LAST_MATCH_TIME',
  Id = 'ID',
  None = 'NONE',
  StartDateThenTier = 'START_DATE_THEN_TIER',
  LastMatchTimeThenTier = 'LAST_MATCH_TIME_THEN_TIER'
}

export type FilterSearchRequestType = {
  /** The term used to define the search parameters. Minimum input is 2 characters. */
  query: Scalars['String'];
  /** Searching our entire database can take time. If you already know what your searching for you, you can limit the query down to a set of specific types. (0 - Playuers, 1 - Matches, 2 - Leagues, 3 - Teams, 4 - ProPlayers, 5 - Casters). Default is all types. */
  searchType?: Maybe<Array<Maybe<Search>>>;
  /** The minimum rank a player must have to be allowed inside the search query. */
  minimumRank?: Maybe<Scalars['Int']>;
  /** The maximum rank a player must have to be allowed inside the search query. */
  maximumRank?: Maybe<Scalars['Int']>;
  /** The minimum amount of time in which a user must have played a game to be allowed inside the search query. A unix timestamp. */
  lastMatchPlayedAgo?: Maybe<Scalars['Long']>;
  /** The leaderboard is split into 4 regions. The user must appear in this region(s) for them to be allowed inside the search query. */
  leaderboardRegionIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  leagueTierIds?: Maybe<Array<Maybe<LeagueTier>>>;
  /** When searching for a team, only return results of those teams of which are considered Professionals. */
  teamIsPro?: Maybe<Scalars['Boolean']>;
  /** The amount to have returned in your query. */
  take?: Maybe<Scalars['Int']>;
};

export type FilterTi2020HeroCompositionRequestType = {
  /** The base level of difficulty */
  difficulty: Ti2020CustomGameMatchDifficultyType;
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: Maybe<FilterOrder>;
  /** The amount to have returned in your query. */
  take?: Maybe<Scalars['Int']>;
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
};

export type FilterTi2020MatchRequestType = {
  /** Return Matches that only include the set of Match Ids provided. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Return matches that only include this single player. */
  steamAccountId?: Maybe<Scalars['Long']>;
  /** Required that the team playing the game won. */
  didWin?: Maybe<Scalars['Boolean']>;
  /** How far into the game (levels) they completed. */
  depth?: Maybe<Scalars['Byte']>;
  /** The base level of difficulty */
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>;
  /** The team had to make it at least this far (level). */
  minDepth?: Maybe<Scalars['Byte']>;
  /** The max must be played in this list of regions */
  regionIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** The game must of been played before this set time. In Unix Time Stamp Format. */
  createdBeforeDateTime?: Maybe<Scalars['Long']>;
  /** The game must of been played after this set time. In Unix Time Stamp Format. */
  createdAfterDateTime?: Maybe<Scalars['Long']>;
  /** The order in which the data returned will be sorted by. */
  orderBy?: Maybe<FilterTi2020CustomGameMatchOrderBy>;
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: Maybe<FilterOrder>;
  /** The amount to have returned in your query. */
  take?: Maybe<Scalars['Int']>;
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
};

export enum FilterTi2020CustomGameMatchOrderBy {
  Duration = 'DURATION',
  EndDateTime = 'END_DATE_TIME'
}

export enum FindMatchPlayerGroupBy {
  Hero = 'HERO',
  Faction = 'FACTION',
  Kills = 'KILLS',
  Deaths = 'DEATHS',
  Assists = 'ASSISTS',
  IsLeaver = 'IS_LEAVER',
  Level = 'LEVEL',
  IsParty = 'IS_PARTY',
  IsRandom = 'IS_RANDOM',
  Lane = 'LANE',
  Role = 'ROLE',
  IsIntentionalFeeding = 'IS_INTENTIONAL_FEEDING',
  Award = 'AWARD',
  RoamLane = 'ROAM_LANE',
  IsVictory = 'IS_VICTORY',
  DurationMinutes = 'DURATION_MINUTES',
  Cluster = 'CLUSTER',
  Region = 'REGION',
  LobbyType = 'LOBBY_TYPE',
  IsLeague = 'IS_LEAGUE',
  IsSeries = 'IS_SERIES',
  GameMode = 'GAME_MODE',
  IsStats = 'IS_STATS',
  GameVersion = 'GAME_VERSION'
}

export enum FindMatchPlayerList {
  All = 'ALL',
  Single = 'SINGLE'
}

export type FindSeriesResponseType = {
  __typename?: 'FindSeriesResponseType';
  series?: Maybe<Array<Maybe<SeriesType>>>;
  totalSeries: Scalars['Int'];
};

export type FollowerType = {
  __typename?: 'FollowerType';
  captainJackIdentity?: Maybe<CaptainJackIdentityType>;
  captainJackIdentityId?: Maybe<Scalars['Guid']>;
  dailyEmail?: Maybe<Scalars['Boolean']>;
  didManualUpdate: Scalars['Boolean'];
  emailLevel?: Maybe<Scalars['Byte']>;
  feedLevel?: Maybe<Scalars['Byte']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  lastEmail?: Maybe<Scalars['Long']>;
  monthlyEmail?: Maybe<Scalars['Boolean']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
  weeklyEmail?: Maybe<Scalars['Boolean']>;
};

export enum GameModeEnumType {
  None = 'NONE',
  AllPick = 'ALL_PICK',
  CaptainsMode = 'CAPTAINS_MODE',
  RandomDraft = 'RANDOM_DRAFT',
  SingleDraft = 'SINGLE_DRAFT',
  AllRandom = 'ALL_RANDOM',
  Intro = 'INTRO',
  TheDiretide = 'THE_DIRETIDE',
  ReverseCaptainsMode = 'REVERSE_CAPTAINS_MODE',
  TheGreeviling = 'THE_GREEVILING',
  Tutorial = 'TUTORIAL',
  MidOnly = 'MID_ONLY',
  LeastPlayed = 'LEAST_PLAYED',
  NewPlayerPool = 'NEW_PLAYER_POOL',
  CompendiumMatchmaking = 'COMPENDIUM_MATCHMAKING',
  Custom = 'CUSTOM',
  CaptainsDraft = 'CAPTAINS_DRAFT',
  BalancedDraft = 'BALANCED_DRAFT',
  AbilityDraft = 'ABILITY_DRAFT',
  Event = 'EVENT',
  AllRandomDeathMatch = 'ALL_RANDOM_DEATH_MATCH',
  SoloMid = 'SOLO_MID',
  AllPickRanked = 'ALL_PICK_RANKED',
  Turbo = 'TURBO',
  Mutation = 'MUTATION'
}

export type GameModeType = {
  __typename?: 'GameModeType';
  id?: Maybe<Scalars['Short']>;
  name?: Maybe<Scalars['String']>;
};

export type GameVersionType = {
  __typename?: 'GameVersionType';
  asOfDateTime?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Short']>;
  name?: Maybe<Scalars['String']>;
};

export type GoldDetailType = {
  __typename?: 'GoldDetailType';
  amount: Scalars['Int'];
  isValidForStats?: Maybe<Scalars['Boolean']>;
  npcId?: Maybe<Scalars['Int']>;
  reason?: Maybe<GoldReason>;
  time: Scalars['Int'];
};

export enum GoldReason {
  Other = 'OTHER',
  Death = 'DEATH',
  BuyBack = 'BUY_BACK',
  Abadons = 'ABADONS',
  Sells = 'SELLS',
  Structures = 'STRUCTURES',
  Heroes = 'HEROES',
  Creeps = 'CREEPS',
  Neutral = 'NEUTRAL',
  Roshan = 'ROSHAN',
  Couriers = 'COURIERS',
  Bounty = 'BOUNTY',
  WardDestruction = 'WARD_DESTRUCTION'
}


export type GuildMemberType = {
  __typename?: 'GuildMemberType';
  guild?: Maybe<GuildType>;
  guildId?: Maybe<Scalars['Int']>;
  imp?: Maybe<Scalars['Int']>;
  joinDateTime?: Maybe<Scalars['Long']>;
  matchCount?: Maybe<Scalars['Int']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Int']>;
  winCount?: Maybe<Scalars['Int']>;
};

export type GuildType = {
  __typename?: 'GuildType';
  createdDateTime?: Maybe<Scalars['Long']>;
  currentPercentile?: Maybe<Scalars['Byte']>;
  description?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['Byte']>;
  lastUpdateDateTime?: Maybe<Scalars['Long']>;
  logo?: Maybe<Scalars['String']>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  memberCount?: Maybe<Scalars['Byte']>;
  members?: Maybe<Array<Maybe<GuildMemberType>>>;
  motd?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pastWeeklyPercentile?: Maybe<Scalars['Byte']>;
  pastWeeklyRank?: Maybe<Scalars['Int']>;
  pattern?: Maybe<Scalars['Byte']>;
  points?: Maybe<Scalars['Int']>;
  primaryColor?: Maybe<Scalars['Byte']>;
  rank?: Maybe<Scalars['Byte']>;
  region?: Maybe<Scalars['Byte']>;
  requiredRank?: Maybe<Scalars['Byte']>;
  secondaryColor?: Maybe<Scalars['Byte']>;
  tag?: Maybe<Scalars['String']>;
  totalBattlePassLevels?: Maybe<Scalars['Int']>;
};


export type GuildTypeMatchesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type HealDetailType = {
  __typename?: 'HealDetailType';
  attacker?: Maybe<Scalars['Short']>;
  byAbility?: Maybe<Scalars['Short']>;
  byItem?: Maybe<Scalars['Short']>;
  target?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
  value?: Maybe<Scalars['Int']>;
};

export type HeroAbilityTalentType = {
  __typename?: 'HeroAbilityTalentType';
  abilityId: Scalars['Int'];
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  count?: Maybe<Scalars['Long']>;
  heroId: Scalars['Int'];
  position?: Maybe<MatchPlayerPositionType>;
  time?: Maybe<Scalars['Long']>;
  timeAverage?: Maybe<Scalars['Decimal']>;
  week: Scalars['Int'];
  wins?: Maybe<Scalars['Long']>;
  winsAverage?: Maybe<Scalars['Decimal']>;
};

export type HeroAbilityType = {
  __typename?: 'HeroAbilityType';
  ability?: Maybe<AbilityType>;
  abilityId?: Maybe<Scalars['Short']>;
  gameVersionId?: Maybe<Scalars['Short']>;
  slot?: Maybe<Scalars['Byte']>;
};

export type HeroDamageDetailType = {
  __typename?: 'HeroDamageDetailType';
  attacker?: Maybe<Scalars['Short']>;
  byAbility?: Maybe<Scalars['Short']>;
  byItem?: Maybe<Scalars['Short']>;
  damageType?: Maybe<Damage>;
  fromIllusion?: Maybe<Scalars['Boolean']>;
  fromNpc?: Maybe<Scalars['Short']>;
  isPhysicalAttack?: Maybe<Scalars['Boolean']>;
  isSourceMainHero?: Maybe<Scalars['Boolean']>;
  isTargetMainHero?: Maybe<Scalars['Boolean']>;
  target?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
  toIllusion?: Maybe<Scalars['Boolean']>;
  toNpc?: Maybe<Scalars['Short']>;
  value: Scalars['Int'];
};

export type HeroDotaPlusLeaderboardRankType = {
  __typename?: 'HeroDotaPlusLeaderboardRankType';
  createdDateTime?: Maybe<Scalars['Long']>;
  heroId?: Maybe<Scalars['Short']>;
  level?: Maybe<Scalars['Byte']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamId?: Maybe<Scalars['Long']>;
  totalActions?: Maybe<Scalars['Long']>;
};

export type HeroDryadType = {
  __typename?: 'HeroDryadType';
  heroId?: Maybe<Scalars['Short']>;
  matchCountVs?: Maybe<Scalars['Long']>;
  matchCountWith?: Maybe<Scalars['Long']>;
  vs?: Maybe<Array<Maybe<HeroStatsHeroDryadType>>>;
  with?: Maybe<Array<Maybe<HeroStatsHeroDryadType>>>;
};

export type HeroGuideListType = {
  __typename?: 'HeroGuideListType';
  guides?: Maybe<Array<Maybe<HeroGuideType>>>;
  heroId?: Maybe<Scalars['Short']>;
  matchCount?: Maybe<Scalars['Int']>;
};


export type HeroGuideListTypeGuidesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type HeroGuideType = {
  __typename?: 'HeroGuideType';
  createdDateTime?: Maybe<Scalars['Long']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']>;
  matchPlayer?: Maybe<MatchPlayerType>;
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type HeroHighPerformanceMatchObjectType = {
  __typename?: 'HeroHighPerformanceMatchObjectType';
  endDateTime?: Maybe<Scalars['Long']>;
  imp: Scalars['Int'];
  matchId?: Maybe<Scalars['Long']>;
};

export type HeroHighPerformancePlayerObjectType = {
  __typename?: 'HeroHighPerformancePlayerObjectType';
  endDateTime?: Maybe<Scalars['Long']>;
  imp: Scalars['Int'];
  playerName: Scalars['String'];
  steamId?: Maybe<Scalars['Long']>;
};

export type HeroHighPerformanceRampageObjectType = {
  __typename?: 'HeroHighPerformanceRampageObjectType';
  endDateTime?: Maybe<Scalars['Long']>;
  matchId?: Maybe<Scalars['Long']>;
  playerName: Scalars['String'];
  steamId?: Maybe<Scalars['Long']>;
  time: Scalars['Int'];
};

export type HeroHighPerformanceType = {
  __typename?: 'HeroHighPerformanceType';
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  heroId: Scalars['Int'];
  items?: Maybe<HeroPurchasePatternType>;
  matches?: Maybe<Array<Maybe<HeroHighPerformanceMatchObjectType>>>;
  players?: Maybe<Array<Maybe<HeroHighPerformancePlayerObjectType>>>;
  position?: Maybe<MatchPlayerPositionType>;
  rampages?: Maybe<Array<Maybe<HeroHighPerformanceRampageObjectType>>>;
  week: Scalars['Int'];
};

export type HeroItemBootPurchaseObjectType = {
  __typename?: 'HeroItemBootPurchaseObjectType';
  activations?: Maybe<Scalars['Long']>;
  activationsAverage?: Maybe<Scalars['Decimal']>;
  activationsTimeAverage?: Maybe<Scalars['Decimal']>;
  activationTime?: Maybe<Scalars['Long']>;
  assists?: Maybe<Scalars['Long']>;
  assistsAverage?: Maybe<Scalars['Decimal']>;
  count?: Maybe<Scalars['Long']>;
  deaths?: Maybe<Scalars['Long']>;
  deathsAverage?: Maybe<Scalars['Decimal']>;
  goldEarned?: Maybe<Scalars['Long']>;
  goldEarnedAverage?: Maybe<Scalars['Decimal']>;
  instance: Scalars['Int'];
  itemId: Scalars['Int'];
  kills?: Maybe<Scalars['Long']>;
  killsAverage?: Maybe<Scalars['Decimal']>;
  time?: Maybe<Scalars['Long']>;
  timeAverage?: Maybe<Scalars['Decimal']>;
  winAverage?: Maybe<Scalars['Decimal']>;
  wins?: Maybe<Scalars['Long']>;
  xp?: Maybe<Scalars['Long']>;
  xpAverage?: Maybe<Scalars['Decimal']>;
};

export type HeroItemBootPurchaseType = {
  __typename?: 'HeroItemBootPurchaseType';
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  count?: Maybe<Scalars['Long']>;
  events?: Maybe<Array<Maybe<HeroItemBootPurchaseObjectType>>>;
  heroId: Scalars['Int'];
  position?: Maybe<MatchPlayerPositionType>;
  week: Scalars['Int'];
};

export type HeroItemPurchaseObjectType = {
  __typename?: 'HeroItemPurchaseObjectType';
  count?: Maybe<Scalars['Long']>;
  instance: Scalars['Int'];
  itemId: Scalars['Int'];
  time?: Maybe<Scalars['Long']>;
  wins?: Maybe<Scalars['Long']>;
  winsAverage?: Maybe<Scalars['Decimal']>;
};

export type HeroItemPurchaseType = {
  __typename?: 'HeroItemPurchaseType';
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  count?: Maybe<Scalars['Long']>;
  events?: Maybe<Array<Maybe<HeroItemPurchaseObjectType>>>;
  heroId: Scalars['Int'];
  position?: Maybe<MatchPlayerPositionType>;
  week: Scalars['Int'];
};

export type HeroItemStartingPurchaseObjectType = {
  __typename?: 'HeroItemStartingPurchaseObjectType';
  count?: Maybe<Scalars['Long']>;
  instance: Scalars['Int'];
  itemId: Scalars['Int'];
  wasGiven: Scalars['Boolean'];
  wins?: Maybe<Scalars['Long']>;
  winsAverage?: Maybe<Scalars['Decimal']>;
};

export type HeroItemStartingPurchaseType = {
  __typename?: 'HeroItemStartingPurchaseType';
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  count?: Maybe<Scalars['Long']>;
  events?: Maybe<Array<Maybe<HeroItemStartingPurchaseObjectType>>>;
  heroId: Scalars['Int'];
  position?: Maybe<MatchPlayerPositionType>;
  week: Scalars['Int'];
};

export type HeroLanguageType = {
  __typename?: 'HeroLanguageType';
  displayName?: Maybe<Scalars['String']>;
  hype?: Maybe<Scalars['String']>;
  lore?: Maybe<Scalars['String']>;
};

export type HeroMatchupType = {
  __typename?: 'HeroMatchupType';
  advantage?: Maybe<Array<Maybe<HeroDryadType>>>;
  disadvantage?: Maybe<Array<Maybe<HeroDryadType>>>;
};

export type HeroMetaTrendType = {
  __typename?: 'HeroMetaTrendType';
  ban?: Maybe<Array<Maybe<Scalars['Long']>>>;
  heroId: Scalars['Int'];
  pick?: Maybe<Array<Maybe<Scalars['Long']>>>;
  win?: Maybe<Array<Maybe<Scalars['Long']>>>;
};

export type HeroPositionDetailType = {
  __typename?: 'HeroPositionDetailType';
  assists?: Maybe<Scalars['Decimal']>;
  count?: Maybe<Scalars['Long']>;
  cs?: Maybe<Scalars['Decimal']>;
  deaths?: Maybe<Scalars['Decimal']>;
  dn?: Maybe<Scalars['Decimal']>;
  heroDamage?: Maybe<Scalars['Decimal']>;
  kills?: Maybe<Scalars['Decimal']>;
  position?: Maybe<MatchPlayerPositionType>;
  towerDamage?: Maybe<Scalars['Decimal']>;
  wins?: Maybe<Scalars['Decimal']>;
};

export type HeroPositionTimeDetailAverageObjectType = {
  __typename?: 'HeroPositionTimeDetailAverageObjectType';
  abilityCasts?: Maybe<Scalars['Decimal']>;
  ancients?: Maybe<Scalars['Decimal']>;
  apm?: Maybe<Scalars['Decimal']>;
  assists?: Maybe<Scalars['Decimal']>;
  attackDamage?: Maybe<Scalars['Decimal']>;
  buybackCount?: Maybe<Scalars['Decimal']>;
  campsStacked?: Maybe<Scalars['Decimal']>;
  castDamage?: Maybe<Scalars['Decimal']>;
  casts?: Maybe<Scalars['Decimal']>;
  comeBackLost?: Maybe<Scalars['Decimal']>;
  comeBackWon?: Maybe<Scalars['Decimal']>;
  courierKills?: Maybe<Scalars['Decimal']>;
  cs?: Maybe<Scalars['Decimal']>;
  damage?: Maybe<Scalars['Decimal']>;
  damageReceived?: Maybe<Scalars['Decimal']>;
  deaths?: Maybe<Scalars['Decimal']>;
  disableCount?: Maybe<Scalars['Decimal']>;
  disableDuration?: Maybe<Scalars['Decimal']>;
  dn?: Maybe<Scalars['Decimal']>;
  godLike?: Maybe<Scalars['Decimal']>;
  goldFed?: Maybe<Scalars['Decimal']>;
  goldLost?: Maybe<Scalars['Decimal']>;
  healingAllies?: Maybe<Scalars['Decimal']>;
  healingItemAllies?: Maybe<Scalars['Decimal']>;
  healingItemSelf?: Maybe<Scalars['Decimal']>;
  healingSelf?: Maybe<Scalars['Decimal']>;
  heroDamage?: Maybe<Scalars['Decimal']>;
  invisibleCount?: Maybe<Scalars['Decimal']>;
  kDAAverage?: Maybe<Scalars['Decimal']>;
  killContributionAverage?: Maybe<Scalars['Decimal']>;
  kills?: Maybe<Scalars['Decimal']>;
  level?: Maybe<Scalars['Decimal']>;
  magicalDamage?: Maybe<Scalars['Decimal']>;
  magicalDamageReceived?: Maybe<Scalars['Decimal']>;
  magicalItemDamage?: Maybe<Scalars['Decimal']>;
  matchCount?: Maybe<Scalars['Long']>;
  mvp?: Maybe<Scalars['Decimal']>;
  networth?: Maybe<Scalars['Decimal']>;
  neutrals?: Maybe<Scalars['Decimal']>;
  physicalDamage?: Maybe<Scalars['Decimal']>;
  physicalDamageReceived?: Maybe<Scalars['Decimal']>;
  physicalItemDamage?: Maybe<Scalars['Decimal']>;
  pureDamage?: Maybe<Scalars['Decimal']>;
  pureDamageReceived?: Maybe<Scalars['Decimal']>;
  purgeModifiers?: Maybe<Scalars['Decimal']>;
  rampage?: Maybe<Scalars['Decimal']>;
  remainingMatchCount?: Maybe<Scalars['Int']>;
  runeBounty?: Maybe<Scalars['Decimal']>;
  runePower?: Maybe<Scalars['Decimal']>;
  slowCount?: Maybe<Scalars['Decimal']>;
  slowDuration?: Maybe<Scalars['Decimal']>;
  stompLost?: Maybe<Scalars['Decimal']>;
  stompWon?: Maybe<Scalars['Decimal']>;
  stunCount?: Maybe<Scalars['Decimal']>;
  stunDuration?: Maybe<Scalars['Decimal']>;
  supportGold?: Maybe<Scalars['Decimal']>;
  teamKills?: Maybe<Scalars['Decimal']>;
  time: Scalars['Int'];
  topCore?: Maybe<Scalars['Decimal']>;
  topSupport?: Maybe<Scalars['Decimal']>;
  towerDamage?: Maybe<Scalars['Decimal']>;
  tripleKill?: Maybe<Scalars['Decimal']>;
  ultraKill?: Maybe<Scalars['Decimal']>;
  weakenCount?: Maybe<Scalars['Decimal']>;
  weakenDuration?: Maybe<Scalars['Decimal']>;
  wins?: Maybe<Scalars['Decimal']>;
  xp?: Maybe<Scalars['Decimal']>;
  xpFed?: Maybe<Scalars['Decimal']>;
};

export type HeroPositionTimeDetailAverageType = {
  __typename?: 'HeroPositionTimeDetailAverageType';
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  events?: Maybe<Array<Maybe<HeroPositionTimeDetailAverageObjectType>>>;
  heroId: Scalars['Short'];
  position?: Maybe<MatchPlayerPositionType>;
  week: Scalars['Int'];
};

export type HeroPurchasePatternType = {
  __typename?: 'HeroPurchasePatternType';
  earlyGame?: Maybe<HeroItemPurchaseType>;
  lateGame?: Maybe<HeroItemPurchaseType>;
  midGame?: Maybe<HeroItemPurchaseType>;
  startingItems?: Maybe<HeroItemStartingPurchaseType>;
};

export type HeroRatingObjectType = {
  __typename?: 'HeroRatingObjectType';
  banRate?: Maybe<Scalars['Decimal']>;
  heroId1: Scalars['Int'];
  heroId2?: Maybe<Scalars['Int']>;
  heroId3?: Maybe<Scalars['Int']>;
  pickRate?: Maybe<Scalars['Decimal']>;
  winRate?: Maybe<Scalars['Decimal']>;
};

export type HeroRatingType = {
  __typename?: 'HeroRatingType';
  dryad?: Maybe<Array<Maybe<HeroRatingObjectType>>>;
  single?: Maybe<Array<Maybe<HeroRatingObjectType>>>;
};

export type HeroRoleType = {
  __typename?: 'HeroRoleType';
  level?: Maybe<Scalars['Short']>;
  roleId?: Maybe<Scalars['Short']>;
};

export type HeroStatType = {
  __typename?: 'HeroStatType';
  agilityBase?: Maybe<Scalars['Float']>;
  agilityGain?: Maybe<Scalars['Float']>;
  attackAcquisitionRange?: Maybe<Scalars['Float']>;
  attackAnimationPoint?: Maybe<Scalars['Float']>;
  attackRange?: Maybe<Scalars['Float']>;
  attackRate?: Maybe<Scalars['Float']>;
  attackType?: Maybe<Scalars['String']>;
  cMEnabled?: Maybe<Scalars['Boolean']>;
  complexity?: Maybe<Scalars['Byte']>;
  enabled?: Maybe<Scalars['Boolean']>;
  heroUnlockOrder?: Maybe<Scalars['Float']>;
  hpBarOffset?: Maybe<Scalars['Float']>;
  intelligenceBase?: Maybe<Scalars['Float']>;
  intelligenceGain?: Maybe<Scalars['Float']>;
  moveSpeed?: Maybe<Scalars['Float']>;
  moveTurnRate?: Maybe<Scalars['Float']>;
  mpRegen?: Maybe<Scalars['Float']>;
  newPlayerEnabled?: Maybe<Scalars['Boolean']>;
  primaryAttribute?: Maybe<Scalars['String']>;
  startingArmor?: Maybe<Scalars['Float']>;
  startingDamageMax?: Maybe<Scalars['Float']>;
  startingDamageMin?: Maybe<Scalars['Float']>;
  startingMagicArmor?: Maybe<Scalars['Float']>;
  strengthBase?: Maybe<Scalars['Float']>;
  strengthGain?: Maybe<Scalars['Float']>;
  team?: Maybe<Scalars['Boolean']>;
  visionDaytimeRange?: Maybe<Scalars['Float']>;
  visionNighttimeRange?: Maybe<Scalars['Float']>;
};

export type HeroStatsHeroDryadType = {
  __typename?: 'HeroStatsHeroDryadType';
  assists?: Maybe<Scalars['Long']>;
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  count?: Maybe<Scalars['Long']>;
  cs?: Maybe<Scalars['Long']>;
  deaths?: Maybe<Scalars['Long']>;
  dn?: Maybe<Scalars['Long']>;
  duration?: Maybe<Scalars['Long']>;
  firstBloodTime?: Maybe<Scalars['Long']>;
  goldEarned?: Maybe<Scalars['Long']>;
  heroDamage?: Maybe<Scalars['Long']>;
  heroHealing?: Maybe<Scalars['Long']>;
  heroId1?: Maybe<Scalars['Short']>;
  heroId2?: Maybe<Scalars['Short']>;
  kills?: Maybe<Scalars['Long']>;
  level?: Maybe<Scalars['Long']>;
  networth?: Maybe<Scalars['Long']>;
  synergy?: Maybe<Scalars['Decimal']>;
  towerDamage?: Maybe<Scalars['Long']>;
  week?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Long']>;
  winsAverage?: Maybe<Scalars['Decimal']>;
  xp?: Maybe<Scalars['Long']>;
};

export type HeroStatsQuery = {
  __typename?: 'HeroStatsQuery';
  /** Returns the last 12 hours by hour showing the amount of matches and the amount of wins by hero id. */
  guide?: Maybe<Array<Maybe<HeroGuideListType>>>;
  /** This is used on the Hero page to show the comparison of skill with the selected hero with other heroes.  It includes our Synergy and our Advantage formulas to ensure that a hero with a high win rate isn't simply just on the top of all the fields. */
  heroVsHeroMatchup?: Maybe<HeroMatchupType>;
  /** This call is used in Hero Of the Day.  It shows recent Rampages, High Performance and Good Players on the selected hero. */
  highPerformance?: Maybe<HeroHighPerformanceType>;
  /** The purchase Item Components for a Hero's Boots.  Tracks things like activations or uses throughout the game. */
  itemBootPurchase?: Maybe<HeroItemBootPurchaseType>;
  /** Returns the items purchased for the selected hero. Adjusting the time adjusts the purchase amount. Shows win rate by item timings. */
  itemFullPurchase?: Maybe<HeroItemPurchaseType>;
  /** This snapshots all items in the inventory of a hero at -00:30.   It tracks if an item was given or purchased. */
  itemStartingPurchase?: Maybe<HeroItemStartingPurchaseType>;
  /** Returns back a list of the hero matchups, showing how that hero's win rate is affected with or against other heroes. */
  matchUp?: Maybe<Array<Maybe<HeroDryadType>>>;
  /** Used on the Heroes page, for determining popular hero trends. */
  metaTrend?: Maybe<Array<Maybe<HeroMetaTrendType>>>;
  /** Hero Data and statistics listed by what lane the hero plays in. */
  position?: Maybe<Array<Maybe<HeroPositionDetailType>>>;
  /** Used in STRATZ Hero Page. Includes Starting items and full items based in groupings of 0-14 minutes, 15-34 minutes and 35+ */
  purchasePattern?: Maybe<HeroPurchasePatternType>;
  /** Used on the Heroes page, includes a small subset of Single Heroes, Dryads and Triads.  Includes Win Rate, Pick Rate, Ban Rate. */
  ratings?: Maybe<HeroRatingType>;
  /** Detailed output of data per minute for each hero. */
  stats?: Maybe<Array<Maybe<HeroPositionTimeDetailAverageType>>>;
  /** This is used on the Hero page to show the comparison of all Hero Talents with the selected hero. */
  talent?: Maybe<Array<Maybe<HeroAbilityTalentType>>>;
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  winDay?: Maybe<Array<Maybe<HeroWinDayType>>>;
  /** Returns the data by game version showing the amount of matches and the amount of wins by hero id. */
  winGameVersion?: Maybe<Array<Maybe<HeroWinGameVersionType>>>;
  /** Returns the last 12 hours by hour showing the amount of matches and the amount of wins by hero id. */
  winHour?: Maybe<Array<Maybe<HeroWinHourType>>>;
  /** Returns the data by month showing the amount of matches and the amount of wins by hero id. */
  winMonth?: Maybe<Array<Maybe<HeroWinMonthType>>>;
  /** Returns the last 12 weeks by week showing the amount of matches and the amount of wins by hero id. */
  winWeek?: Maybe<Array<Maybe<HeroWinWeekType>>>;
};


export type HeroStatsQueryGuideArgs = {
  heroId?: Maybe<Scalars['Int']>;
  withHeroId?: Maybe<Scalars['Short']>;
  againstHeroId?: Maybe<Scalars['Short']>;
  isPro?: Maybe<Scalars['Boolean']>;
  positionId?: Maybe<MatchPlayerPositionType>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type HeroStatsQueryHeroVsHeroMatchupArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  matchLimit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type HeroStatsQueryHighPerformanceArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type HeroStatsQueryItemBootPurchaseArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
};


export type HeroStatsQueryItemFullPurchaseArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  minTime?: Maybe<Scalars['Int']>;
  maxTime?: Maybe<Scalars['Int']>;
  matchLimit?: Maybe<Scalars['Int']>;
};


export type HeroStatsQueryItemStartingPurchaseArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
};


export type HeroStatsQueryMatchUpArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  orderBy?: Maybe<Scalars['Byte']>;
  matchLimit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type HeroStatsQueryMetaTrendArgs = {
  day?: Maybe<Scalars['Long']>;
};


export type HeroStatsQueryPositionArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  minTime?: Maybe<Scalars['Int']>;
  maxTime?: Maybe<Scalars['Int']>;
};


export type HeroStatsQueryPurchasePatternArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
};


export type HeroStatsQueryRatingsArgs = {
  heroIds: Array<Maybe<Scalars['Short']>>;
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  orderBy?: Maybe<Scalars['Byte']>;
};


export type HeroStatsQueryStatsArgs = {
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  minTime?: Maybe<Scalars['Int']>;
  maxTime?: Maybe<Scalars['Int']>;
};


export type HeroStatsQueryTalentArgs = {
  heroId: Scalars['Short'];
  week?: Maybe<Scalars['Long']>;
  bracketBasicIds?: Maybe<Array<Maybe<RankBracketHeroTimeDetail>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
};


export type HeroStatsQueryWinDayArgs = {
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  take?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
  groupBy?: Maybe<FilterHeroWinRequestGroupBy>;
};


export type HeroStatsQueryWinGameVersionArgs = {
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
  groupBy?: Maybe<FilterHeroWinRequestGroupBy>;
};


export type HeroStatsQueryWinHourArgs = {
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  take?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
  groupBy?: Maybe<FilterHeroWinRequestGroupBy>;
};


export type HeroStatsQueryWinMonthArgs = {
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
  groupBy?: Maybe<FilterHeroWinRequestGroupBy>;
};


export type HeroStatsQueryWinWeekArgs = {
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  take?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  positionIds?: Maybe<Array<Maybe<MatchPlayerPositionType>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
  groupBy?: Maybe<FilterHeroWinRequestGroupBy>;
};

export type HeroTalentType = {
  __typename?: 'HeroTalentType';
  abilityId?: Maybe<Scalars['Short']>;
  slot?: Maybe<Scalars['Byte']>;
};

export type HeroType = {
  __typename?: 'HeroType';
  abilities?: Maybe<Array<Maybe<HeroAbilityType>>>;
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  gameVersionId?: Maybe<Scalars['Short']>;
  id?: Maybe<Scalars['Short']>;
  language?: Maybe<HeroLanguageType>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<HeroRoleType>>>;
  shortName?: Maybe<Scalars['String']>;
  stats?: Maybe<HeroStatType>;
  talents?: Maybe<Array<Maybe<HeroTalentType>>>;
};

export type HeroWinDayType = {
  __typename?: 'HeroWinDayType';
  day: Scalars['Long'];
  heroId: Scalars['Short'];
  matchCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type HeroWinGameVersionType = {
  __typename?: 'HeroWinGameVersionType';
  gameVersionId: Scalars['Short'];
  heroId: Scalars['Short'];
  matchCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type HeroWinHourType = {
  __typename?: 'HeroWinHourType';
  heroId: Scalars['Short'];
  hour: Scalars['Long'];
  matchCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type HeroWinMonthType = {
  __typename?: 'HeroWinMonthType';
  heroId: Scalars['Short'];
  matchCount: Scalars['Int'];
  month: Scalars['Long'];
  winCount: Scalars['Int'];
};

export type HeroWinWeekType = {
  __typename?: 'HeroWinWeekType';
  heroId: Scalars['Short'];
  matchCount: Scalars['Int'];
  week: Scalars['Long'];
  winCount: Scalars['Int'];
};

export type HomepageHeroDryadType = {
  __typename?: 'HomepageHeroDryadType';
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>;
  comparisonHeroBaseWinRate?: Maybe<Scalars['Decimal']>;
  comparisonHeroId?: Maybe<Scalars['Short']>;
  mainHeroId?: Maybe<Scalars['Short']>;
  matchCount?: Maybe<Scalars['Long']>;
  synergy?: Maybe<Scalars['Decimal']>;
  winCount?: Maybe<Scalars['Long']>;
  winsAverage?: Maybe<Scalars['Decimal']>;
};

export type HomepageHeroSynergyType = {
  __typename?: 'HomepageHeroSynergyType';
  heroDryads?: Maybe<Array<Maybe<HomepageHeroDryadType>>>;
  mainHeroBaseWinRate?: Maybe<Scalars['Decimal']>;
  mainHeroId?: Maybe<Scalars['Short']>;
};

export type ImpGeneratorMatchPlayerType = {
  __typename?: 'ImpGeneratorMatchPlayerType';
  events?: Maybe<Array<Maybe<Array<Maybe<ImpGeneratorPlayerEventType>>>>>;
  impValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
  winChance?: Maybe<Array<Maybe<Scalars['Float']>>>;
  winRateByPlayerMinuteValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
};

export type ImpGeneratorPlayerEventRequestType = {
  time: Scalars['Byte'];
  kills: Scalars['UShort'];
  deaths: Scalars['UShort'];
  assists: Scalars['UShort'];
  cs: Scalars['UShort'];
  dn: Scalars['UShort'];
  level: Scalars['Byte'];
  physicalDamage: Scalars['Int'];
  magicalDamage: Scalars['Int'];
  pureDamage: Scalars['Int'];
  damageReceived: Scalars['Int'];
  healingAllies: Scalars['Int'];
  runePower: Scalars['Int'];
  neutrals: Scalars['Int'];
  apm: Scalars['Int'];
  stunCount: Scalars['Int'];
  stunDuration: Scalars['Int'];
  disableCount: Scalars['Int'];
  disableDuration: Scalars['Int'];
  slowCount: Scalars['Int'];
  slowDuration: Scalars['Int'];
  weakenCount: Scalars['Int'];
  weakenDuration: Scalars['Int'];
};

export type ImpGeneratorPlayerEventType = {
  __typename?: 'ImpGeneratorPlayerEventType';
  apm?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['UShort']>;
  cs?: Maybe<Scalars['UShort']>;
  damageReceived?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['UShort']>;
  disableCount?: Maybe<Scalars['Int']>;
  disableDuration?: Maybe<Scalars['Int']>;
  dn?: Maybe<Scalars['UShort']>;
  healingAllies?: Maybe<Scalars['Int']>;
  kills?: Maybe<Scalars['UShort']>;
  level?: Maybe<Scalars['Byte']>;
  magicalDamage?: Maybe<Scalars['Int']>;
  neutrals?: Maybe<Scalars['Int']>;
  physicalDamage?: Maybe<Scalars['Int']>;
  pureDamage?: Maybe<Scalars['Int']>;
  runePower?: Maybe<Scalars['Int']>;
  slowCount?: Maybe<Scalars['Int']>;
  slowDuration?: Maybe<Scalars['Int']>;
  stunCount?: Maybe<Scalars['Int']>;
  stunDuration?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Byte']>;
  weakenCount?: Maybe<Scalars['Int']>;
  weakenDuration?: Maybe<Scalars['Int']>;
};

export type ImpGeneratorPlayerRequestType = {
  heroId: Scalars['Short'];
  rank: Scalars['Byte'];
  position: MatchPlayerPositionType;
  events: Array<Maybe<ImpGeneratorPlayerEventRequestType>>;
};

export type ImpGeneratorPlayerType = {
  __typename?: 'ImpGeneratorPlayerType';
  events?: Maybe<Array<Maybe<ImpGeneratorPlayerEventType>>>;
  impValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
  winChance?: Maybe<Array<Maybe<Scalars['Float']>>>;
  winRateByPlayerMinuteValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
};

export type ImpGeneratorRequestType = {
  bans: Array<Maybe<Scalars['Short']>>;
  players: Array<Maybe<ImpGeneratorPlayerRequestType>>;
  isTurbo: Scalars['Boolean'];
};

export type ImpQuery = {
  __typename?: 'ImpQuery';
  /** Returns details about all players in a specific match and details regarding Imp */
  matchGenerator?: Maybe<ImpGeneratorMatchPlayerType>;
  /** Returns details about a specific player in a game with certains events. */
  playerGenerator?: Maybe<ImpGeneratorPlayerType>;
};


export type ImpQueryMatchGeneratorArgs = {
  matchId: Scalars['Long'];
};


export type ImpQueryPlayerGeneratorArgs = {
  request: ImpGeneratorRequestType;
};

export type InventoryObjectType = {
  __typename?: 'InventoryObjectType';
  charges?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Short']>;
  secondaryCharges?: Maybe<Scalars['Int']>;
};

export type InventoryType = {
  __typename?: 'InventoryType';
  backPack0?: Maybe<InventoryObjectType>;
  backPack1?: Maybe<InventoryObjectType>;
  backPack2?: Maybe<InventoryObjectType>;
  item0?: Maybe<InventoryObjectType>;
  item1?: Maybe<InventoryObjectType>;
  item2?: Maybe<InventoryObjectType>;
  item3?: Maybe<InventoryObjectType>;
  item4?: Maybe<InventoryObjectType>;
  item5?: Maybe<InventoryObjectType>;
  neutral0?: Maybe<InventoryObjectType>;
  teleport0?: Maybe<InventoryObjectType>;
  time: Scalars['Int'];
};

export type ItemAttributeType = {
  __typename?: 'ItemAttributeType';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ItemComponentType = {
  __typename?: 'ItemComponentType';
  componentId?: Maybe<Scalars['Short']>;
  index?: Maybe<Scalars['Byte']>;
};

export type ItemLanguageType = {
  __typename?: 'ItemLanguageType';
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  lore?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemPurchaseType = {
  __typename?: 'ItemPurchaseType';
  itemId?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
};

export type ItemStatType = {
  __typename?: 'ItemStatType';
  aliases?: Maybe<Scalars['String']>;
  behavior?: Maybe<Scalars['Long']>;
  castPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  castRange?: Maybe<Array<Maybe<Scalars['Int']>>>;
  channelTime?: Maybe<Array<Maybe<Scalars['Float']>>>;
  cooldown?: Maybe<Array<Maybe<Scalars['Float']>>>;
  cost?: Maybe<Scalars['Int']>;
  fightRecapLevel?: Maybe<Scalars['Byte']>;
  initialCharges?: Maybe<Scalars['Short']>;
  initialStock?: Maybe<Scalars['Short']>;
  initialStockTime?: Maybe<Scalars['Short']>;
  isAlertable?: Maybe<Scalars['Boolean']>;
  isDisplayCharges?: Maybe<Scalars['Boolean']>;
  isDroppable?: Maybe<Scalars['Boolean']>;
  isHideCharges?: Maybe<Scalars['Boolean']>;
  isPermanent?: Maybe<Scalars['Boolean']>;
  isPurchasable?: Maybe<Scalars['Boolean']>;
  isRecipe?: Maybe<Scalars['Boolean']>;
  isRequiresCharges?: Maybe<Scalars['Boolean']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  isSideShop?: Maybe<Scalars['Boolean']>;
  isStackable?: Maybe<Scalars['Boolean']>;
  isSupport?: Maybe<Scalars['Boolean']>;
  isTempestDoubleClonable?: Maybe<Scalars['Boolean']>;
  itemResult?: Maybe<Scalars['Short']>;
  manaCost?: Maybe<Array<Maybe<Scalars['Float']>>>;
  needsComponents?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['String']>;
  sharedCooldown?: Maybe<Scalars['String']>;
  shopTags?: Maybe<Scalars['String']>;
  stockMax?: Maybe<Scalars['Short']>;
  stockTime?: Maybe<Scalars['Int']>;
  unitTargetFlags?: Maybe<Scalars['Long']>;
  unitTargetTeam?: Maybe<Scalars['Long']>;
  unitTargetType?: Maybe<Scalars['Long']>;
  upgradeItem?: Maybe<Scalars['Short']>;
  upgradeRecipe?: Maybe<Scalars['Short']>;
};

export type ItemType = {
  __typename?: 'ItemType';
  attributes?: Maybe<Array<Maybe<ItemAttributeType>>>;
  components?: Maybe<Array<Maybe<ItemComponentType>>>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Short']>;
  image?: Maybe<Scalars['String']>;
  isSupportFullItem?: Maybe<Scalars['Boolean']>;
  language?: Maybe<ItemLanguageType>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  stat?: Maybe<ItemStatType>;
};

export type ItemUsedEventType = {
  __typename?: 'ItemUsedEventType';
  attacker?: Maybe<Scalars['Short']>;
  itemId?: Maybe<Scalars['Short']>;
  target?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
};

export type KillDetailType = {
  __typename?: 'KillDetailType';
  assist?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attacker?: Maybe<Scalars['Short']>;
  byAbility?: Maybe<Scalars['Short']>;
  byItem?: Maybe<Scalars['Short']>;
  gold?: Maybe<Scalars['Int']>;
  isFromIllusion?: Maybe<Scalars['Boolean']>;
  isGank?: Maybe<Scalars['Boolean']>;
  isInvisible?: Maybe<Scalars['Boolean']>;
  isRuneEffected?: Maybe<Scalars['Boolean']>;
  isSmoke?: Maybe<Scalars['Boolean']>;
  isSolo?: Maybe<Scalars['Boolean']>;
  isTpRecently?: Maybe<Scalars['Boolean']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
  xp?: Maybe<Scalars['Int']>;
};

export enum Language {
  English = 'ENGLISH',
  Brazilian = 'BRAZILIAN',
  Bulgarian = 'BULGARIAN',
  Czech = 'CZECH',
  Danish = 'DANISH',
  Dutch = 'DUTCH',
  Finnish = 'FINNISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Greek = 'GREEK',
  Hungarian = 'HUNGARIAN',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Korean = 'KOREAN',
  Koreana = 'KOREANA',
  Norwegian = 'NORWEGIAN',
  Polish = 'POLISH',
  Portuguese = 'PORTUGUESE',
  Romanian = 'ROMANIAN',
  Russian = 'RUSSIAN',
  SChinese = 'S_CHINESE',
  Spanish = 'SPANISH',
  Swedish = 'SWEDISH',
  TChinese = 'T_CHINESE',
  Thai = 'THAI',
  Turkish = 'TURKISH',
  Ukrainian = 'UKRAINIAN'
}

export type LanguageType = {
  __typename?: 'LanguageType';
  id: Scalars['Byte'];
  languageCode?: Maybe<Scalars['String']>;
  languageName?: Maybe<Scalars['String']>;
};

export type LastHitDetailType = {
  __typename?: 'LastHitDetailType';
  attacker?: Maybe<Scalars['Short']>;
  byAbility?: Maybe<Scalars['Short']>;
  byItem?: Maybe<Scalars['Short']>;
  gold?: Maybe<Scalars['Int']>;
  isAncient?: Maybe<Scalars['Boolean']>;
  isCreep?: Maybe<Scalars['Boolean']>;
  isFromIllusion?: Maybe<Scalars['Boolean']>;
  isNeutral?: Maybe<Scalars['Boolean']>;
  mapLocation?: Maybe<MapLocationEnums>;
  npcId?: Maybe<Scalars['Short']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  xp?: Maybe<Scalars['Int']>;
};

export enum LeaderboardDivision {
  Americas = 'AMERICAS',
  SeAsia = 'SE_ASIA',
  Europe = 'EUROPE',
  China = 'CHINA'
}

export type LeaderboardQuery = {
  __typename?: 'LeaderboardQuery';
  /** Gets the current leaderboard for Battle Pass levels. */
  battlePass?: Maybe<PlayerBattlePassResponseType>;
  /** Gets the current leaderboard for all coaches by level. */
  coaching?: Maybe<PlayerCoachingLeaderboardResponseType>;
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  dotaPlus?: Maybe<PlayerHeroDotaPlusLeaderboardRankResponseType>;
  /** Gets the top player of DotaPlus order by Level and Time Achived. */
  dotaPlusTopLevels?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankType>>>;
  /** Show amount of active and expired DotaPlus users by Week */
  dotaPlusWeek?: Maybe<Array<Maybe<DotaPlusWeekType>>>;
  /** Gets the current leaderboard for all guilds by points. */
  guild?: Maybe<Array<Maybe<GuildType>>>;
  /** Gets the current leaderboard for all players by a specific Hero, order by IMP. */
  hero?: Maybe<Array<Maybe<PlayerLeaderBoardByHeroType>>>;
  /** Returns the list of the current season leaderboard. */
  season?: Maybe<PlayerSeasonLeaderboardType>;
};


export type LeaderboardQueryBattlePassArgs = {
  eventId?: Maybe<Scalars['Byte']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type LeaderboardQueryCoachingArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type LeaderboardQueryDotaPlusArgs = {
  heroId?: Maybe<Scalars['Short']>;
  orderBy?: Maybe<FilterLeaderboardOrder>;
  level?: Maybe<Scalars['Byte']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type LeaderboardQueryGuildArgs = {
  request?: Maybe<FilterLeaderboardGuildRequestType>;
};


export type LeaderboardQueryHeroArgs = {
  request?: Maybe<FilterLeaderboardHeroRequestType>;
};


export type LeaderboardQuerySeasonArgs = {
  seasonId?: Maybe<Scalars['Int']>;
  leaderboardDivision?: Maybe<LeaderboardDivision>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type LeagueBattlePassType = {
  __typename?: 'LeagueBattlePassType';
  average?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type LeagueMatchesRequestType = {
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: Maybe<Scalars['Long']>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip: Scalars['Int'];
  /** The amount of matches to have returned in your query. Max 1000 */
  take: Scalars['Int'];
};

export type LeagueMetaDetailType = {
  __typename?: 'LeagueMetaDetailType';
  banCount?: Maybe<Scalars['Int']>;
  banRate?: Maybe<Scalars['Decimal']>;
  heroId?: Maybe<Scalars['Short']>;
  lossCount?: Maybe<Scalars['Int']>;
  pickCount?: Maybe<Scalars['Int']>;
  pickRate?: Maybe<Scalars['Decimal']>;
  winCount?: Maybe<Scalars['Int']>;
  winRate?: Maybe<Scalars['Decimal']>;
};

export type LeagueMetaType = {
  __typename?: 'LeagueMetaType';
  bestRecord?: Maybe<LeagueMetaDetailType>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']>;
  missingMatchCount?: Maybe<Scalars['Int']>;
  mostBanned?: Maybe<LeagueMetaDetailType>;
  mostPicked?: Maybe<LeagueMetaDetailType>;
  totalMatchCount?: Maybe<Scalars['Int']>;
};

export enum LeagueNodeDefaultGroupEnum {
  Invalid = 'INVALID',
  BestOfOne = 'BEST_OF_ONE',
  BestOfThree = 'BEST_OF_THREE',
  BestOfFive = 'BEST_OF_FIVE',
  BestOfTwo = 'BEST_OF_TWO'
}

export type LeagueNodeGroupType = {
  __typename?: 'LeagueNodeGroupType';
  advancingNodeGroupId?: Maybe<Scalars['Short']>;
  advancingTeamCount?: Maybe<Scalars['Byte']>;
  defaultNodeType?: Maybe<LeagueNodeDefaultGroupEnum>;
  eliminationDPCPoints?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Short']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  isFinalGroup?: Maybe<Scalars['Boolean']>;
  isTieBreaker?: Maybe<Scalars['Boolean']>;
  maxRounds?: Maybe<Scalars['Byte']>;
  name?: Maybe<Scalars['String']>;
  nodeGroupType?: Maybe<LeagueNodeGroupTypeEnum>;
  nodes?: Maybe<Array<Maybe<LeagueNodeType>>>;
  parentNodeGroupId?: Maybe<Scalars['Short']>;
  phase?: Maybe<Scalars['Byte']>;
  region?: Maybe<Scalars['Byte']>;
  round?: Maybe<Scalars['Byte']>;
  secondaryAdvancingNodeGroupId?: Maybe<Scalars['Short']>;
  secondaryAdvancingTeamCount?: Maybe<Scalars['Byte']>;
  startDate?: Maybe<Scalars['Long']>;
  teamCount?: Maybe<Scalars['Byte']>;
  tertiaryAdvancingNodeGroupId?: Maybe<Scalars['Short']>;
  tertiaryAdvancingTeamCount?: Maybe<Scalars['Byte']>;
};

export enum LeagueNodeGroupTypeEnum {
  Invalid = 'INVALID',
  Organizational = 'ORGANIZATIONAL',
  RoundRobin = 'ROUND_ROBIN',
  Swiss = 'SWISS',
  BracketSingle = 'BRACKET_SINGLE',
  BracketDoubleSeedLoser = 'BRACKET_DOUBLE_SEED_LOSER',
  BracketDoubleAllWinner = 'BRACKET_DOUBLE_ALL_WINNER',
  ShowMatch = 'SHOW_MATCH',
  Gsl = 'GSL'
}

export type LeagueNodeType = {
  __typename?: 'LeagueNodeType';
  actualTime?: Maybe<Scalars['Long']>;
  hasStarted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Short']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  losingNodeId?: Maybe<Scalars['Short']>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  name?: Maybe<Scalars['String']>;
  nodeGroupId?: Maybe<Scalars['Short']>;
  nodeType?: Maybe<Scalars['Byte']>;
  scheduledTime?: Maybe<Scalars['Long']>;
  seriesId?: Maybe<Scalars['Long']>;
  streamIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  streams?: Maybe<Array<Maybe<LeagueStreamType>>>;
  teamOne?: Maybe<TeamType>;
  teamOneId?: Maybe<Scalars['Int']>;
  teamOneWins?: Maybe<Scalars['Byte']>;
  teamTwo?: Maybe<TeamType>;
  teamTwoId?: Maybe<Scalars['Int']>;
  teamTwoWins?: Maybe<Scalars['Byte']>;
  winningNodeId?: Maybe<Scalars['Short']>;
};

export enum LeagueRegion {
  Unset = 'UNSET',
  Na = 'NA',
  Sa = 'SA',
  Europe = 'EUROPE',
  Cis = 'CIS',
  China = 'CHINA',
  Sea = 'SEA'
}

export type LeagueRequestType = {
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  leagueIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of tier ids to include in this query, excluding all results that do not include one of these tiers. */
  tiers?: Maybe<Array<Maybe<LeagueTier>>>;
  /** Whether an image is required or not, represented in a boolean. */
  requireImage?: Maybe<Scalars['Boolean']>;
  /** Whether a prize pool is required or not, represented in a boolean. */
  requirePrizePool?: Maybe<Scalars['Boolean']>;
  /** Whether a start and end date is required or not, represented in a boolean. */
  requireStartAndEndDates?: Maybe<Scalars['Boolean']>;
  /** Whether a league has live matches or not, represented in a boolean. */
  hasLiveMatches?: Maybe<Scalars['Boolean']>;
  /** Whether a league has ended or not, represented in a boolean. */
  leagueEnded?: Maybe<Scalars['Boolean']>;
  /** Whether a league has started or not, represented in a boolean. */
  isFutureLeague?: Maybe<Scalars['Boolean']>;
  /** If a league is set to start after this time. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** If a league is set to end before this time. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** Determine to Start value of finding a League Between two specific datetimes. */
  betweenStartDateTime?: Maybe<Scalars['Long']>;
  /** Determine to End value of finding a League Between two specific datetimes. */
  betweenEndDateTime?: Maybe<Scalars['Long']>;
  /** The id to order the results by in this query. */
  orderBy?: Maybe<FilterOrderBy>;
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
  /** The amount to have returned in your query. */
  take?: Maybe<Scalars['Int']>;
};

export type LeagueStatType = {
  __typename?: 'LeagueStatType';
  averageMatchDurationSeconds?: Maybe<Scalars['Int']>;
  matchCount?: Maybe<Scalars['Int']>;
  radiantWinMatchCount?: Maybe<Scalars['Int']>;
};

export type LeagueStreamType = {
  __typename?: 'LeagueStreamType';
  broadcastProvider?: Maybe<Scalars['Byte']>;
  id?: Maybe<Scalars['Int']>;
  languageId?: Maybe<Language>;
  name?: Maybe<Scalars['String']>;
  streamUrl?: Maybe<Scalars['String']>;
  vodUrl?: Maybe<Scalars['String']>;
};

export type LeagueTableHeroLanesObjectType = {
  __typename?: 'LeagueTableHeroLanesObjectType';
  id?: Maybe<Scalars['Byte']>;
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
};

export type LeagueTableHeroOverviewType = {
  __typename?: 'LeagueTableHeroOverviewType';
  banCount: Scalars['Int'];
  banPhaseOne: Scalars['Int'];
  banPhaseThree: Scalars['Int'];
  banPhaseTwo: Scalars['Int'];
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
  pickPhaseOne: Scalars['Int'];
  pickPhaseThree: Scalars['Int'];
  pickPhaseTwo: Scalars['Int'];
};

export type LeagueTableHeroStatsType = {
  __typename?: 'LeagueTableHeroStatsType';
  assists: Scalars['Float'];
  cs: Scalars['Float'];
  deaths: Scalars['Float'];
  gpm: Scalars['Float'];
  heal: Scalars['Float'];
  heroDamage: Scalars['Float'];
  killContribution: Scalars['Float'];
  kills: Scalars['Float'];
  towerDamage: Scalars['Float'];
  xpm: Scalars['Float'];
};

export type LeagueTableHeroType = {
  __typename?: 'LeagueTableHeroType';
  heroes?: Maybe<Array<Maybe<LeagueTableHeroStatsType>>>;
  heroId?: Maybe<Scalars['Short']>;
  lanes?: Maybe<Array<Maybe<LeagueTableHeroLanesObjectType>>>;
  overview?: Maybe<LeagueTableHeroOverviewType>;
  stats?: Maybe<LeagueTableHeroStatsType>;
};

export type LeagueTablePlayerHeroesObjectType = {
  __typename?: 'LeagueTablePlayerHeroesObjectType';
  heroId: Scalars['Int'];
  imp: Scalars['Int'];
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
};

export type LeagueTablePlayerLanesObjectType = {
  __typename?: 'LeagueTablePlayerLanesObjectType';
  id?: Maybe<Scalars['Byte']>;
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
};

export type LeagueTablePlayerOverviewType = {
  __typename?: 'LeagueTablePlayerOverviewType';
  earnings?: Maybe<Scalars['Float']>;
  imp: Scalars['Int'];
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
  points?: Maybe<Scalars['Float']>;
  seriesCount: Scalars['Int'];
  seriesWins: Scalars['Int'];
};

export type LeagueTablePlayerStatsType = {
  __typename?: 'LeagueTablePlayerStatsType';
  assists: Scalars['Float'];
  cs: Scalars['Float'];
  deaths: Scalars['Float'];
  gpm: Scalars['Float'];
  heal: Scalars['Float'];
  heroDamage: Scalars['Float'];
  killContribution: Scalars['Float'];
  kills: Scalars['Float'];
  towerDamage: Scalars['Float'];
  xpm: Scalars['Float'];
};

export type LeagueTablePlayerType = {
  __typename?: 'LeagueTablePlayerType';
  heroes?: Maybe<Array<Maybe<LeagueTablePlayerHeroesObjectType>>>;
  lanes?: Maybe<Array<Maybe<LeagueTablePlayerLanesObjectType>>>;
  overview?: Maybe<LeagueTablePlayerOverviewType>;
  stats?: Maybe<LeagueTablePlayerStatsType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type LeagueTableTeamHeroesObjectType = {
  __typename?: 'LeagueTableTeamHeroesObjectType';
  banCount?: Maybe<Scalars['Int']>;
  heroId: Scalars['Int'];
  imp?: Maybe<Scalars['Decimal']>;
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
};

export type LeagueTableTeamLanesObjectType = {
  __typename?: 'LeagueTableTeamLanesObjectType';
  id?: Maybe<Scalars['Byte']>;
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
};

export type LeagueTableTeamOverviewType = {
  __typename?: 'LeagueTableTeamOverviewType';
  earnings?: Maybe<Scalars['Float']>;
  matchCount: Scalars['Int'];
  matchWins: Scalars['Int'];
  points?: Maybe<Scalars['Float']>;
  seriesCount: Scalars['Int'];
  seriesWins: Scalars['Int'];
  tmp?: Maybe<Scalars['Float']>;
};

export type LeagueTableTeamStatsType = {
  __typename?: 'LeagueTableTeamStatsType';
  assists: Scalars['Float'];
  cs: Scalars['Float'];
  deaths: Scalars['Float'];
  duration: Scalars['Float'];
  gpm: Scalars['Float'];
  heal: Scalars['Float'];
  heroDamage: Scalars['Float'];
  kills: Scalars['Float'];
  towerDamage: Scalars['Float'];
  xpm: Scalars['Float'];
};

export type LeagueTableTeamType = {
  __typename?: 'LeagueTableTeamType';
  heroes?: Maybe<Array<Maybe<LeagueTableTeamHeroesObjectType>>>;
  lanes?: Maybe<Array<Maybe<LeagueTableTeamLanesObjectType>>>;
  overview?: Maybe<LeagueTableTeamOverviewType>;
  stats?: Maybe<LeagueTableTeamStatsType>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Int']>;
};

export type LeagueTableType = {
  __typename?: 'LeagueTableType';
  leagueId: Scalars['Int'];
  tableHeroes?: Maybe<Array<Maybe<LeagueTableHeroType>>>;
  tablePlayers?: Maybe<Array<Maybe<LeagueTablePlayerType>>>;
  tableTeams?: Maybe<Array<Maybe<LeagueTableTeamType>>>;
};

export enum LeagueTier {
  Unset = 'UNSET',
  Amateur = 'AMATEUR',
  Professional = 'PROFESSIONAL',
  Minor = 'MINOR',
  Major = 'MAJOR',
  International = 'INTERNATIONAL',
  DpcQualifier = 'DPC_QUALIFIER',
  DpcLeagueQualifier = 'DPC_LEAGUE_QUALIFIER',
  DpcLeague = 'DPC_LEAGUE'
}

export type LeagueType = {
  __typename?: 'LeagueType';
  banner?: Maybe<Scalars['String']>;
  basePrizePool?: Maybe<Scalars['Int']>;
  battlePass?: Maybe<LeagueBattlePassType>;
  country?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['Long']>;
  freeToSpectate?: Maybe<Scalars['Boolean']>;
  hasLiveMatches?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  imageUri?: Maybe<Scalars['String']>;
  isFollowed?: Maybe<Scalars['Boolean']>;
  lastMatchDate?: Maybe<Scalars['Long']>;
  liveMatches?: Maybe<Array<Maybe<MatchLiveType>>>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  modifiedDateTime?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  nodeGroups?: Maybe<Array<Maybe<LeagueNodeGroupType>>>;
  private?: Maybe<Scalars['Boolean']>;
  prizePool?: Maybe<Scalars['Int']>;
  region?: Maybe<LeagueRegion>;
  series?: Maybe<FindSeriesResponseType>;
  startDateTime?: Maybe<Scalars['Long']>;
  stats?: Maybe<LeagueStatType>;
  stopSalesTime?: Maybe<Scalars['DateTime']>;
  tables?: Maybe<LeagueTableType>;
  tier?: Maybe<LeagueTier>;
  tournamentUrl?: Maybe<Scalars['String']>;
  venue?: Maybe<Scalars['String']>;
};


export type LeagueTypeMatchesArgs = {
  request: LeagueMatchesRequestType;
};


export type LeagueTypeSeriesArgs = {
  leagueStageTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type LeagueTypeTablesArgs = {
  leagueStageTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  calculateTypeId?: Maybe<TableCalculateEnum>;
};

export type LiveEventMatchDireTide2020StompType = {
  __typename?: 'LiveEventMatchDireTide2020StompType';
  match?: Maybe<DireTide2020CustomGameMatchType>;
};

export type LiveEventPlayerDireTide2020CandyScoredType = {
  __typename?: 'LiveEventPlayerDireTide2020CandyScoredType';
  candyScored?: Maybe<Scalars['Short']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<DireTide2020CustomGameMatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroAssistsType = {
  __typename?: 'LiveEventPlayerHeroAssistsType';
  assistCount?: Maybe<Scalars['Byte']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroBuildingDamageType = {
  __typename?: 'LiveEventPlayerHeroBuildingDamageType';
  buildingDamage?: Maybe<Scalars['Int']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroDewardType = {
  __typename?: 'LiveEventPlayerHeroDewardType';
  dewardCount?: Maybe<Scalars['Byte']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroDotaPlusLevelType = {
  __typename?: 'LiveEventPlayerHeroDotaPlusLevelType';
  heroId?: Maybe<Scalars['Short']>;
  level?: Maybe<Scalars['Byte']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroExpPerMinuteType = {
  __typename?: 'LiveEventPlayerHeroExpPerMinuteType';
  expPerMinute?: Maybe<Scalars['Short']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroGoldPerMinuteType = {
  __typename?: 'LiveEventPlayerHeroGoldPerMinuteType';
  goldPerMinute?: Maybe<Scalars['Short']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroHealingType = {
  __typename?: 'LiveEventPlayerHeroHealingType';
  healingAmount?: Maybe<Scalars['Int']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroHeroDamageType = {
  __typename?: 'LiveEventPlayerHeroHeroDamageType';
  heroDamage?: Maybe<Scalars['Int']>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroHighImpType = {
  __typename?: 'LiveEventPlayerHeroHighImpType';
  heroId?: Maybe<Scalars['Short']>;
  imp?: Maybe<Scalars['Byte']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroItemPurchaseType = {
  __typename?: 'LiveEventPlayerHeroItemPurchaseType';
  heroId?: Maybe<Scalars['Short']>;
  itemCount?: Maybe<Scalars['Byte']>;
  itemId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroKillsType = {
  __typename?: 'LiveEventPlayerHeroKillsType';
  heroId?: Maybe<Scalars['Short']>;
  killCount?: Maybe<Scalars['Byte']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroWinStreakType = {
  __typename?: 'LiveEventPlayerHeroWinStreakType';
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
  winStreakCount?: Maybe<Scalars['Byte']>;
};

export type LiveEventPlayerRampageType = {
  __typename?: 'LiveEventPlayerRampageType';
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  rampageCount?: Maybe<Scalars['Byte']>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerRankUpType = {
  __typename?: 'LiveEventPlayerRankUpType';
  match?: Maybe<MatchType>;
  rank?: Maybe<Scalars['Byte']>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerWinStreakType = {
  __typename?: 'LiveEventPlayerWinStreakType';
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
  winStreakCount?: Maybe<Scalars['Byte']>;
};

export type LiveEventProPlayerLiveType = {
  __typename?: 'LiveEventProPlayerLiveType';
  match?: Maybe<MatchLiveType>;
  steamAccounts?: Maybe<Array<Maybe<SteamAccountType>>>;
};

export type LiveEventType = LiveEventPlayerRampageType | LiveEventPlayerWinStreakType | LiveEventPlayerHeroWinStreakType | LiveEventPlayerHeroKillsType | LiveEventPlayerHeroAssistsType | LiveEventPlayerHeroBuildingDamageType | LiveEventPlayerHeroHealingType | LiveEventPlayerHeroHeroDamageType | LiveEventPlayerHeroGoldPerMinuteType | LiveEventPlayerHeroExpPerMinuteType | LiveEventPlayerHeroHighImpType | LiveEventPlayerHeroDotaPlusLevelType | LiveEventPlayerRankUpType | LiveEventProPlayerLiveType | LiveEventPlayerHeroItemPurchaseType | LiveEventPlayerHeroDewardType | LiveEventMatchDireTide2020StompType | LiveEventPlayerDireTide2020CandyScoredType;

export type LiveQuery = {
  __typename?: 'LiveQuery';
  /** Find a live match by match id. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. id is a required input field. */
  match?: Maybe<MatchType>;
  /** Find all live matches. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. */
  matches?: Maybe<Array<Maybe<MatchType>>>;
};


export type LiveQueryMatchArgs = {
  id: Scalars['Long'];
  skip?: Maybe<Scalars['Int']>;
};

export type LobbyTypeType = {
  __typename?: 'LobbyTypeType';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};


export enum MapLocationEnums {
  RadiantBase = 'RADIANT_BASE',
  RadiantOffLane = 'RADIANT_OFF_LANE',
  RadiantMidLane = 'RADIANT_MID_LANE',
  RadiantSafeLane = 'RADIANT_SAFE_LANE',
  DireBase = 'DIRE_BASE',
  DireOffLane = 'DIRE_OFF_LANE',
  DireMidLane = 'DIRE_MID_LANE',
  DireSafeLane = 'DIRE_SAFE_LANE',
  River = 'RIVER',
  Roshan = 'ROSHAN',
  Roaming = 'ROAMING',
  RadiantFountain = 'RADIANT_FOUNTAIN',
  DireFountain = 'DIRE_FOUNTAIN'
}

export type MatchGroupByType = {
  __typename?: 'MatchGroupByType';
  avgImp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  matchCount?: Maybe<Scalars['Int']>;
  winCount?: Maybe<Scalars['Int']>;
};

export enum MatchLaneType {
  Roaming = 'ROAMING',
  SafeLane = 'SAFE_LANE',
  MidLane = 'MID_LANE',
  OffLane = 'OFF_LANE',
  Jungle = 'JUNGLE',
  Unknown = 'UNKNOWN'
}

export type MatchLivePlayerType = {
  __typename?: 'MatchLivePlayerType';
  experiencePerMinute?: Maybe<Scalars['UShort']>;
  gameVersionId?: Maybe<Scalars['Short']>;
  gold?: Maybe<Scalars['Int']>;
  goldPerMinute?: Maybe<Scalars['UShort']>;
  goldSpent?: Maybe<Scalars['Int']>;
  hero?: Maybe<HeroType>;
  heroDamage?: Maybe<Scalars['Int']>;
  heroId?: Maybe<Scalars['Short']>;
  impPerMinute?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  isRadiant?: Maybe<Scalars['Boolean']>;
  item0Id?: Maybe<Scalars['Short']>;
  item1Id?: Maybe<Scalars['Short']>;
  item2Id?: Maybe<Scalars['Short']>;
  item3Id?: Maybe<Scalars['Short']>;
  item4Id?: Maybe<Scalars['Short']>;
  item5Id?: Maybe<Scalars['Short']>;
  leaverStatus?: Maybe<Scalars['Byte']>;
  level?: Maybe<Scalars['Byte']>;
  matchId?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  networth?: Maybe<Scalars['Int']>;
  numAssists?: Maybe<Scalars['Byte']>;
  numDeaths?: Maybe<Scalars['Byte']>;
  numDenies?: Maybe<Scalars['UShort']>;
  numKills?: Maybe<Scalars['Byte']>;
  numLastHits?: Maybe<Scalars['UShort']>;
  playbackData?: Maybe<MatchPlayerPlaybackDataType>;
  playerSlot?: Maybe<Scalars['Byte']>;
  respawnTimer?: Maybe<Scalars['Short']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
  towerDamage?: Maybe<Scalars['Int']>;
  ultimateCooldown?: Maybe<Scalars['Short']>;
  ultimateState?: Maybe<Scalars['Short']>;
};

export type MatchLiveType = {
  __typename?: 'MatchLiveType';
  averageRank?: Maybe<Scalars['Int']>;
  buildingState?: Maybe<Scalars['Long']>;
  completed?: Maybe<Scalars['Boolean']>;
  createdDateTime?: Maybe<Scalars['Long']>;
  delay?: Maybe<Scalars['Short']>;
  direScore?: Maybe<Scalars['Byte']>;
  direTeam?: Maybe<TeamType>;
  direTeamId?: Maybe<Scalars['Int']>;
  gameMinute?: Maybe<Scalars['Short']>;
  gameMode?: Maybe<Scalars['Int']>;
  gameState?: Maybe<Scalars['Byte']>;
  gameTime?: Maybe<Scalars['Int']>;
  isParsing?: Maybe<Scalars['Boolean']>;
  isUpdating?: Maybe<Scalars['Boolean']>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']>;
  lobbyId?: Maybe<Scalars['Long']>;
  lobbyType?: Maybe<Scalars['Byte']>;
  matchId?: Maybe<Scalars['Long']>;
  numHumanPlayers?: Maybe<Scalars['Byte']>;
  parseBeginGameTime?: Maybe<Scalars['Int']>;
  pickBans?: Maybe<Array<Maybe<MatchStatsPickBanType>>>;
  playbackData?: Maybe<MatchPlaybackDataType>;
  players?: Maybe<Array<Maybe<MatchLivePlayerType>>>;
  radiantLead?: Maybe<Scalars['Int']>;
  radiantScore?: Maybe<Scalars['Byte']>;
  radiantTeam?: Maybe<TeamType>;
  radiantTeamId?: Maybe<Scalars['Int']>;
  serverSteamId?: Maybe<Scalars['Long']>;
  spectators?: Maybe<Scalars['Int']>;
};

export type MatchPlaybackDataBuildingEventType = {
  __typename?: 'MatchPlaybackDataBuildingEventType';
  didShrineActivate?: Maybe<Scalars['Boolean']>;
  hp?: Maybe<Scalars['Int']>;
  indexId?: Maybe<Scalars['Int']>;
  isRadiant?: Maybe<Scalars['Boolean']>;
  maxHp?: Maybe<Scalars['Int']>;
  npcId?: Maybe<Scalars['Int']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  type?: Maybe<BuildingType>;
};

export type MatchPlaybackDataCourierEventType = {
  __typename?: 'MatchPlaybackDataCourierEventType';
  events?: Maybe<Array<Maybe<MatchplaybackDataCourierEventObjectType>>>;
  id: Scalars['Int'];
  isRadiant?: Maybe<Scalars['Boolean']>;
  ownerHero?: Maybe<Scalars['Int']>;
};

export type MatchPlaybackDataRoshanEventType = {
  __typename?: 'MatchPlaybackDataRoshanEventType';
  createTime?: Maybe<Scalars['Int']>;
  hp?: Maybe<Scalars['Int']>;
  item0?: Maybe<Scalars['Int']>;
  item1?: Maybe<Scalars['Int']>;
  item2?: Maybe<Scalars['Int']>;
  item3?: Maybe<Scalars['Int']>;
  item4?: Maybe<Scalars['Int']>;
  item5?: Maybe<Scalars['Int']>;
  maxHp?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  totalDamageTaken?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type MatchPlaybackDataRuneEventType = {
  __typename?: 'MatchPlaybackDataRuneEventType';
  action: Scalars['Int'];
  fromPlayer: Scalars['Int'];
  indexId: Scalars['Int'];
  location: Scalars['Int'];
  positionX: Scalars['Int'];
  positionY: Scalars['Int'];
  rune: Scalars['Int'];
  time: Scalars['Int'];
};

export type MatchPlaybackDataTowerDeathEventType = {
  __typename?: 'MatchPlaybackDataTowerDeathEventType';
  dire: Scalars['Int'];
  radiant: Scalars['Int'];
  time: Scalars['Int'];
};

export type MatchPlaybackDataType = {
  __typename?: 'MatchPlaybackDataType';
  buildingEvents?: Maybe<Array<Maybe<MatchPlaybackDataBuildingEventType>>>;
  courierEvents?: Maybe<Array<Maybe<MatchPlaybackDataCourierEventType>>>;
  direCaptainSteamAccount?: Maybe<SteamAccountType>;
  direCaptainSteamAccountId?: Maybe<Scalars['Long']>;
  radiantCaptainSteamAccount?: Maybe<SteamAccountType>;
  radiantCaptainSteamAccountId?: Maybe<Scalars['Long']>;
  roshanEvents?: Maybe<Array<Maybe<MatchPlaybackDataRoshanEventType>>>;
  runeEvents?: Maybe<Array<Maybe<MatchPlaybackDataRuneEventType>>>;
  towerDeathEvents?: Maybe<Array<Maybe<MatchPlaybackDataTowerDeathEventType>>>;
  wardEvents?: Maybe<Array<Maybe<MatchPlaybackDataWardEventType>>>;
};

export type MatchPlaybackDataWardEventType = {
  __typename?: 'MatchPlaybackDataWardEventType';
  action?: Maybe<Scalars['Byte']>;
  fromPlayer?: Maybe<Scalars['Int']>;
  indexId: Scalars['Int'];
  positionX: Scalars['Int'];
  positionY: Scalars['Int'];
  time: Scalars['Int'];
  wardType?: Maybe<Scalars['Byte']>;
};

export type MatchPlayerAdditionalUnitType = {
  __typename?: 'MatchPlayerAdditionalUnitType';
  backpack0Id?: Maybe<Scalars['Short']>;
  backpack1Id?: Maybe<Scalars['Short']>;
  backpack2Id?: Maybe<Scalars['Short']>;
  item0Id?: Maybe<Scalars['Short']>;
  item1Id?: Maybe<Scalars['Short']>;
  item2Id?: Maybe<Scalars['Short']>;
  item3Id?: Maybe<Scalars['Short']>;
  item4Id?: Maybe<Scalars['Short']>;
  item5Id?: Maybe<Scalars['Short']>;
  neutral0Id?: Maybe<Scalars['Short']>;
};

export enum MatchPlayerAward {
  None = 'NONE',
  Mvp = 'MVP',
  TopCore = 'TOP_CORE',
  TopSupport = 'TOP_SUPPORT'
}

export type MatchPlayerHeroDamageSourceAbilityReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageSourceAbilityReportObjectType';
  abilityId: Scalars['Int'];
  amount: Scalars['Int'];
  count: Scalars['Int'];
};

export type MatchPlayerHeroDamageSourceItemReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageSourceItemReportObjectType';
  amount: Scalars['Int'];
  count: Scalars['Int'];
  itemId: Scalars['Int'];
};

export type MatchPlayerHeroDamageTargetReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageTargetReportObjectType';
  amount: Scalars['Int'];
  target: Scalars['Int'];
};

export type MatchPlayerHeroDamageTotalRecievedReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageTotalRecievedReportObjectType';
  disableCount: Scalars['Int'];
  disableDuration: Scalars['Int'];
  heal: Scalars['Int'];
  magicalDamage: Scalars['Int'];
  physicalDamage: Scalars['Int'];
  pureDamage: Scalars['Int'];
  slowCount: Scalars['Int'];
  slowDuration: Scalars['Int'];
  stunCount: Scalars['Int'];
  stunDuration: Scalars['Int'];
};

export type MatchPlayerHeroDamageTotalReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageTotalReportObjectType';
  allyHeal: Scalars['Int'];
  disableCount: Scalars['Int'];
  disableDuration: Scalars['Int'];
  magicalDamage: Scalars['Int'];
  physicalDamage: Scalars['Int'];
  pureDamage: Scalars['Int'];
  selfHeal: Scalars['Int'];
  slowCount: Scalars['Int'];
  slowDuration: Scalars['Int'];
  stunCount: Scalars['Int'];
  stunDuration: Scalars['Int'];
};

export type MatchPlayerInventoryObjectType = {
  __typename?: 'MatchPlayerInventoryObjectType';
  charges?: Maybe<Scalars['Int']>;
  itemId: Scalars['Int'];
  secondaryCharges?: Maybe<Scalars['Int']>;
};

export type MatchPlayerInventoryType = {
  __typename?: 'MatchPlayerInventoryType';
  backPack0?: Maybe<MatchPlayerInventoryObjectType>;
  backPack1?: Maybe<MatchPlayerInventoryObjectType>;
  backPack2?: Maybe<MatchPlayerInventoryObjectType>;
  item0?: Maybe<MatchPlayerInventoryObjectType>;
  item1?: Maybe<MatchPlayerInventoryObjectType>;
  item2?: Maybe<MatchPlayerInventoryObjectType>;
  item3?: Maybe<MatchPlayerInventoryObjectType>;
  item4?: Maybe<MatchPlayerInventoryObjectType>;
  item5?: Maybe<MatchPlayerInventoryObjectType>;
  neutral0?: Maybe<MatchPlayerInventoryObjectType>;
};

export type MatchPlayerItemPurchaseEventType = {
  __typename?: 'MatchPlayerItemPurchaseEventType';
  itemId: Scalars['Int'];
  time: Scalars['Int'];
};

export type MatchPlayerPlaybackDataType = {
  __typename?: 'MatchPlayerPlaybackDataType';
  abilityActiveLists?: Maybe<Array<Maybe<AbilityActiveListType>>>;
  abilityLearnEvents?: Maybe<Array<Maybe<AbilityLearnEventsType>>>;
  abilityUsedEvents?: Maybe<Array<Maybe<AbilityUsedEventsType>>>;
  assistEvents?: Maybe<Array<Maybe<AssistDetailType>>>;
  buyBackEvents?: Maybe<Array<Maybe<BuyBackDetailType>>>;
  csEvents?: Maybe<Array<Maybe<LastHitDetailType>>>;
  deathEvents?: Maybe<Array<Maybe<DeathDetailType>>>;
  experienceEvents?: Maybe<Array<Maybe<ExperienceDetailType>>>;
  goldEvents?: Maybe<Array<Maybe<GoldDetailType>>>;
  healEvents?: Maybe<Array<Maybe<HealDetailType>>>;
  heroDamageEvents?: Maybe<Array<Maybe<HeroDamageDetailType>>>;
  inventoryEvents?: Maybe<Array<Maybe<InventoryType>>>;
  itemUsedEvents?: Maybe<Array<Maybe<ItemUsedEventType>>>;
  killEvents?: Maybe<Array<Maybe<KillDetailType>>>;
  playerUpdateAttributeEvents?: Maybe<Array<Maybe<PlayerUpdateAttributeDetailType>>>;
  playerUpdateBattleEvents?: Maybe<Array<Maybe<PlayerUpdateBattleDetailType>>>;
  playerUpdateGoldEvents?: Maybe<Array<Maybe<PlayerUpdateGoldDetailType>>>;
  playerUpdateHealthEvents?: Maybe<Array<Maybe<PlayerUpdateHealthDetailType>>>;
  playerUpdateLevelEvents?: Maybe<Array<Maybe<PlayerUpdateLevelDetailType>>>;
  playerUpdatePositionEvents?: Maybe<Array<Maybe<PlayerUpdatePositionDetailType>>>;
  purchaseEvents?: Maybe<Array<Maybe<ItemPurchaseType>>>;
  spiritBearInventoryEvents?: Maybe<Array<Maybe<SpiritBearInventoryType>>>;
  streakEvents?: Maybe<Array<Maybe<StreakEventType>>>;
  towerDamageEvents?: Maybe<Array<Maybe<TowerDamageDetailType>>>;
};

export enum MatchPlayerPositionType {
  Position_1 = 'POSITION_1',
  Position_2 = 'POSITION_2',
  Position_3 = 'POSITION_3',
  Position_4 = 'POSITION_4',
  Position_5 = 'POSITION_5',
  Unknown = 'UNKNOWN',
  Filtered = 'FILTERED',
  All = 'ALL'
}

export enum MatchPlayerRoleType {
  Core = 'CORE',
  LightSupport = 'LIGHT_SUPPORT',
  HardSupport = 'HARD_SUPPORT',
  Unknown = 'UNKNOWN'
}

export type MatchPlayerSpectatorType = {
  __typename?: 'MatchPlayerSpectatorType';
  isRadiantCoach?: Maybe<Scalars['Boolean']>;
  isVictory?: Maybe<Scalars['Boolean']>;
  steamId?: Maybe<Scalars['Long']>;
};

export type MatchPlayerSpiritBearInventoryType = {
  __typename?: 'MatchPlayerSpiritBearInventoryType';
  backPack0Id?: Maybe<Scalars['Int']>;
  backPack1Id?: Maybe<Scalars['Int']>;
  backPack2Id?: Maybe<Scalars['Int']>;
  item0Id?: Maybe<Scalars['Int']>;
  item1Id?: Maybe<Scalars['Int']>;
  item2Id?: Maybe<Scalars['Int']>;
  item3Id?: Maybe<Scalars['Int']>;
  item4Id?: Maybe<Scalars['Int']>;
  item5Id?: Maybe<Scalars['Int']>;
  neutral0Id?: Maybe<Scalars['Int']>;
};

export type MatchPlayerStatsAbilityCastObjectType = {
  __typename?: 'MatchPlayerStatsAbilityCastObjectType';
  count: Scalars['Int'];
  damage: Scalars['Int'];
  duration?: Maybe<Scalars['Int']>;
  target: Scalars['Int'];
};

export type MatchPlayerStatsAbilityCastReportType = {
  __typename?: 'MatchPlayerStatsAbilityCastReportType';
  abilityId: Scalars['Int'];
  count: Scalars['Int'];
  targets?: Maybe<Array<Maybe<MatchPlayerStatsAbilityCastObjectType>>>;
};

export type MatchPlayerStatsActionReportType = {
  __typename?: 'MatchPlayerStatsActionReportType';
  attackPosition: Scalars['Int'];
  attackTarget: Scalars['Int'];
  castNoTarget: Scalars['Int'];
  castPosition: Scalars['Int'];
  castTarget: Scalars['Int'];
  glyphCast: Scalars['Int'];
  heldPosition: Scalars['Int'];
  moveToPosition: Scalars['Int'];
  moveToTarget: Scalars['Int'];
  pingUsed: Scalars['Int'];
  scanUsed: Scalars['Int'];
};

export type MatchPlayerStatsAllTalkEventType = {
  __typename?: 'MatchPlayerStatsAllTalkEventType';
  message?: Maybe<Scalars['String']>;
  pausedTick: Scalars['Int'];
  time: Scalars['Int'];
};

export type MatchPlayerStatsAssistEventType = {
  __typename?: 'MatchPlayerStatsAssistEventType';
  gold?: Maybe<Scalars['Int']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  xp?: Maybe<Scalars['Int']>;
};

export type MatchPlayerStatsBuffEventType = {
  __typename?: 'MatchPlayerStatsBuffEventType';
  abilityId?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  stackCount?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
};

export type MatchPlayerStatsChatWheelEventType = {
  __typename?: 'MatchPlayerStatsChatWheelEventType';
  chatWheelId?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
};

export type MatchPlayerStatsCourierKillEventType = {
  __typename?: 'MatchPlayerStatsCourierKillEventType';
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
};

export type MatchPlayerStatsDeathEventType = {
  __typename?: 'MatchPlayerStatsDeathEventType';
  assist?: Maybe<Array<Scalars['Int']>>;
  attacker?: Maybe<Scalars['Short']>;
  byAbility?: Maybe<Scalars['Int']>;
  byItem?: Maybe<Scalars['Int']>;
  goldFed?: Maybe<Scalars['Int']>;
  goldLost?: Maybe<Scalars['Int']>;
  hasHealAvailable?: Maybe<Scalars['Boolean']>;
  isAttemptTpOut?: Maybe<Scalars['Boolean']>;
  isBurst?: Maybe<Scalars['Boolean']>;
  isDieBack?: Maybe<Scalars['Boolean']>;
  isEngagedOnDeath?: Maybe<Scalars['Boolean']>;
  isTracked?: Maybe<Scalars['Boolean']>;
  isWardWalkThrough?: Maybe<Scalars['Boolean']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  timeDead?: Maybe<Scalars['Int']>;
  xpFed?: Maybe<Scalars['Int']>;
};

export type MatchPlayerStatsFarmDistributionObjectType = {
  __typename?: 'MatchPlayerStatsFarmDistributionObjectType';
  count: Scalars['Int'];
  gold?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  xp?: Maybe<Scalars['Int']>;
};

export type MatchPlayerStatsFarmDistributionReportType = {
  __typename?: 'MatchPlayerStatsFarmDistributionReportType';
  abandonGold: Scalars['Int'];
  ancientLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  bountyGold?: Maybe<MatchPlayerStatsFarmDistributionObjectType>;
  buildings?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  buyBackGold: Scalars['Int'];
  creepLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  creepType?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  itemGold: Scalars['Int'];
  neutralLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  other?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  talentGold: Scalars['Int'];
};

export type MatchPlayerStatsHeroDamageReportType = {
  __typename?: 'MatchPlayerStatsHeroDamageReportType';
  dealtSourceAbility?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>>;
  dealtSourceItem?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>>;
  dealtTargets?: Maybe<Array<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>>;
  dealtTotal?: Maybe<MatchPlayerHeroDamageTotalReportObjectType>;
  receivedSourceAbility?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>>;
  receivedSourceItem?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>>;
  receivedTargets?: Maybe<Array<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>>;
  receivedTotal?: Maybe<MatchPlayerHeroDamageTotalRecievedReportObjectType>;
};

export type MatchPlayerStatsItemUsedEventType = {
  __typename?: 'MatchPlayerStatsItemUsedEventType';
  count?: Maybe<Scalars['Int']>;
  itemId: Scalars['Int'];
};

export type MatchPlayerStatsKillEventType = {
  __typename?: 'MatchPlayerStatsKillEventType';
  assist?: Maybe<Array<Scalars['Int']>>;
  byAbility?: Maybe<Scalars['Int']>;
  byItem?: Maybe<Scalars['Int']>;
  gold?: Maybe<Scalars['Int']>;
  isGank?: Maybe<Scalars['Boolean']>;
  isInvisible?: Maybe<Scalars['Boolean']>;
  isSmoke?: Maybe<Scalars['Boolean']>;
  isSolo?: Maybe<Scalars['Boolean']>;
  isTpRecently?: Maybe<Scalars['Boolean']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  xp?: Maybe<Scalars['Int']>;
};

export type MatchPlayerStatsLocationReportType = {
  __typename?: 'MatchPlayerStatsLocationReportType';
  positionX: Scalars['Int'];
  positionY: Scalars['Int'];
};

export type MatchPlayerStatsRuneEventType = {
  __typename?: 'MatchPlayerStatsRuneEventType';
  action?: Maybe<RuneAction>;
  gold?: Maybe<Scalars['Int']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  rune?: Maybe<RuneEnums>;
  time: Scalars['Int'];
};

export type MatchPlayerStatsTowerDamageReportType = {
  __typename?: 'MatchPlayerStatsTowerDamageReportType';
  damage: Scalars['Int'];
  npcId: Scalars['Int'];
};

export type MatchPlayerStatsType = {
  __typename?: 'MatchPlayerStatsType';
  abilities?: Maybe<Array<Maybe<PlayerAbilityType>>>;
  abilityCastReport?: Maybe<Array<Maybe<MatchPlayerStatsAbilityCastReportType>>>;
  actionReport?: Maybe<MatchPlayerStatsActionReportType>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  actionsPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  allTalks?: Maybe<Array<Maybe<MatchPlayerStatsAllTalkEventType>>>;
  assistCount?: Maybe<Scalars['Int']>;
  assistEvents?: Maybe<Array<Maybe<MatchPlayerStatsAssistEventType>>>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  campStack?: Maybe<Array<Maybe<Scalars['Int']>>>;
  chatWheels?: Maybe<Array<Maybe<MatchPlayerStatsChatWheelEventType>>>;
  courierKills?: Maybe<Array<Maybe<MatchPlayerStatsCourierKillEventType>>>;
  deathCount?: Maybe<Scalars['Int']>;
  deathEvents?: Maybe<Array<Maybe<MatchPlayerStatsDeathEventType>>>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  deniesPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dotaPlusHeroXp?: Maybe<Scalars['Int']>;
  experienceCount?: Maybe<Scalars['Int']>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  experiencePerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  farmDistributionReport?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionReportType>>>;
  gameVersionId?: Maybe<Scalars['Short']>;
  goldCount?: Maybe<Scalars['Int']>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  goldPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  healCount?: Maybe<Scalars['Int']>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  healPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heroDamageCount?: Maybe<Scalars['Int']>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  heroDamagePerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heroDamageReport?: Maybe<MatchPlayerStatsHeroDamageReportType>;
  /** Starts at minute 0:00.  The last index will contain the last subset of data, so if a match is 41:01 long, the last index will be the change in the last 1 second. */
  impPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Starts at minute 0:00.  The last index will contain the last subset of data, so if a match is 41:01 long, the last index will be the change in the last 1 second. */
  impPerMinute2?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Starts at minute -0:60 (Pre-game) and continues to the end of the game. */
  inventoryReport?: Maybe<Array<Maybe<MatchPlayerInventoryType>>>;
  invisibleSeconds?: Maybe<Scalars['Int']>;
  itemPurchases?: Maybe<Array<Maybe<MatchPlayerItemPurchaseEventType>>>;
  itemUsed?: Maybe<Array<Maybe<MatchPlayerStatsItemUsedEventType>>>;
  killCount?: Maybe<Scalars['Int']>;
  killEvents?: Maybe<Array<Maybe<MatchPlayerStatsKillEventType>>>;
  lastHitCount?: Maybe<Scalars['Int']>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  lastHitsPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level?: Maybe<Array<Maybe<Scalars['Int']>>>;
  locationReport?: Maybe<Array<Maybe<MatchPlayerStatsLocationReportType>>>;
  matchId?: Maybe<Scalars['Long']>;
  matchPlayerBuffEvent?: Maybe<Array<Maybe<MatchPlayerStatsBuffEventType>>>;
  /** Starts at minute 0:00 and Index 0 will show the Networth at 0:00 in the game. */
  networthPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  runes?: Maybe<Array<Maybe<MatchPlayerStatsRuneEventType>>>;
  spiritBearInventoryReport?: Maybe<Array<Maybe<MatchPlayerSpiritBearInventoryType>>>;
  steamAccountId?: Maybe<Scalars['Long']>;
  towerDamageCount?: Maybe<Scalars['Int']>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  towerDamagePerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  towerDamageReport?: Maybe<Array<Maybe<MatchPlayerStatsTowerDamageReportType>>>;
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  tripsFountainPerMinute?: Maybe<Array<Maybe<Scalars['Int']>>>;
  wards?: Maybe<Array<Maybe<MatchPlayerStatsWardEventType>>>;
};


export type MatchPlayerStatsTypeAbilitiesArgs = {
  gameVerionId?: Maybe<Scalars['Int']>;
};

export type MatchPlayerStatsWardEventType = {
  __typename?: 'MatchPlayerStatsWardEventType';
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  type: Scalars['Int'];
};

export type MatchPlayerType = {
  __typename?: 'MatchPlayerType';
  additionalUnit?: Maybe<MatchPlayerAdditionalUnitType>;
  assists?: Maybe<Scalars['Byte']>;
  award?: Maybe<Scalars['Byte']>;
  backpack0Id?: Maybe<Scalars['Short']>;
  backpack1Id?: Maybe<Scalars['Short']>;
  backpack2Id?: Maybe<Scalars['Short']>;
  behavior?: Maybe<Scalars['Short']>;
  deaths?: Maybe<Scalars['Byte']>;
  experiencePerMinute?: Maybe<Scalars['Short']>;
  gameVersionId?: Maybe<Scalars['Short']>;
  gold?: Maybe<Scalars['Int']>;
  goldPerMinute?: Maybe<Scalars['Short']>;
  goldSpent?: Maybe<Scalars['Int']>;
  hero?: Maybe<HeroType>;
  heroAverage?: Maybe<Array<Maybe<HeroPositionTimeDetailAverageObjectType>>>;
  heroDamage?: Maybe<Scalars['Int']>;
  heroHealing?: Maybe<Scalars['Int']>;
  heroId?: Maybe<Scalars['Short']>;
  imp?: Maybe<Scalars['Short']>;
  intentionalFeeding?: Maybe<Scalars['Boolean']>;
  isRadiant?: Maybe<Scalars['Boolean']>;
  isRandom?: Maybe<Scalars['Boolean']>;
  isVictory?: Maybe<Scalars['Boolean']>;
  item0Id?: Maybe<Scalars['Short']>;
  item1Id?: Maybe<Scalars['Short']>;
  item2Id?: Maybe<Scalars['Short']>;
  item3Id?: Maybe<Scalars['Short']>;
  item4Id?: Maybe<Scalars['Short']>;
  item5Id?: Maybe<Scalars['Short']>;
  kills?: Maybe<Scalars['Byte']>;
  lane?: Maybe<Scalars['Byte']>;
  leaverStatus?: Maybe<Scalars['Byte']>;
  level?: Maybe<Scalars['Byte']>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']>;
  networth?: Maybe<Scalars['Int']>;
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars['Short']>;
  numDenies?: Maybe<Scalars['Short']>;
  numLastHits?: Maybe<Scalars['Short']>;
  partyId?: Maybe<Scalars['Byte']>;
  playbackData?: Maybe<MatchPlayerPlaybackDataType>;
  playerSlot?: Maybe<Scalars['Byte']>;
  role?: Maybe<Scalars['Byte']>;
  roleBasic?: Maybe<Scalars['Byte']>;
  stats?: Maybe<MatchPlayerStatsType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
  streakPrediction?: Maybe<Scalars['Byte']>;
  towerDamage?: Maybe<Scalars['Int']>;
};

export type MatchReplayUpdateType = {
  __typename?: 'MatchReplayUpdateType';
  createdDateTime?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['ID']>;
  teamId: Scalars['Int'];
};

export type MatchReplayUploadHeroSummaryType = {
  __typename?: 'MatchReplayUploadHeroSummaryType';
  banCountAgainst: Scalars['Int'];
  banCountWith: Scalars['Int'];
  heroId?: Maybe<Scalars['Short']>;
  matchCountAgainst: Scalars['Int'];
  matchCountWith: Scalars['Int'];
  winCountAgainst: Scalars['Int'];
  winCountWith: Scalars['Int'];
};

export type MatchReplayUploadMatchType = {
  __typename?: 'MatchReplayUploadMatchType';
  didRadiantWin: Scalars['Boolean'];
  direKills?: Maybe<Scalars['Byte']>;
  direTeam?: Maybe<TeamType>;
  direTeamId?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Short']>;
  durationMinutes: Scalars['Int'];
  endDateTime?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  gameMode?: Maybe<Scalars['Byte']>;
  gameVersionId: Scalars['Int'];
  id?: Maybe<Scalars['Long']>;
  isActive: Scalars['Boolean'];
  isComplete: Scalars['Boolean'];
  isRadiantFirstPick: Scalars['Boolean'];
  isValidated: Scalars['Boolean'];
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']>;
  lobbyType?: Maybe<Scalars['Byte']>;
  matchUploadTeamId: Scalars['Int'];
  numHumanPlayers?: Maybe<Scalars['Byte']>;
  numHumanSpectators?: Maybe<Scalars['Byte']>;
  players?: Maybe<Array<Maybe<MatchReplayUploadPlayerType>>>;
  radiantKills?: Maybe<Scalars['Byte']>;
  radiantTeam?: Maybe<TeamType>;
  radiantTeamId?: Maybe<Scalars['Int']>;
  seriesId?: Maybe<Scalars['Long']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  stats?: Maybe<MatchReplayUploadStatsType>;
  uploaderCaptainJackIdentityId?: Maybe<Scalars['Guid']>;
};

export type MatchReplayUploadOverviewType = {
  __typename?: 'MatchReplayUploadOverviewType';
  matchCount: Scalars['Int'];
  matches?: Maybe<Array<Maybe<MatchReplayUploadMatchType>>>;
  winCount: Scalars['Int'];
};

export type MatchReplayUploadPickBanType = {
  __typename?: 'MatchReplayUploadPickBanType';
  bannedHeroId?: Maybe<Scalars['Short']>;
  heroId?: Maybe<Scalars['Short']>;
  isPick: Scalars['Boolean'];
  isRadiant: Scalars['Boolean'];
  order?: Maybe<Scalars['Byte']>;
  playerSlot?: Maybe<Scalars['Byte']>;
  time?: Maybe<Scalars['Byte']>;
  wasBannedSuccessfully: Scalars['Boolean'];
};

export type MatchReplayUploadPlayerStatsItemsType = {
  __typename?: 'MatchReplayUploadPlayerStatsItemsType';
  backpack0IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  backpack1IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  backpack2IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  item0IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  item1IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  item2IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  item3IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  item4IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  item5IdList?: Maybe<Array<Maybe<Scalars['Byte']>>>;
};

export type MatchReplayUploadPlayerStatsType = {
  __typename?: 'MatchReplayUploadPlayerStatsType';
  agilityTotalList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  assistsList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  bkbChargesUsedList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  campStackList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  claimedDenyCountList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  claimedMissCountList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  commandsIssuedList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  creepKillGoldList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  creepStackList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  damageBonusList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  damageMaxList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  damageMinList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  deathsList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  denyCountList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  goldLostToDeathList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  goldSpentOnBuybacksList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  goldSpentOnConsumablesList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  goldSpentOnItemsList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  goldSpentOnSupportList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heroDamageList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heroHealingList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heroKillGoldList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  incomeGoldList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  intellectTotalList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  items?: Maybe<MatchReplayUploadPlayerStatsItemsType>;
  killsList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lastHitCountList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lastHitMultiKillList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lastHitStreakList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  levelList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxHealthList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxManaList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  missCountList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nearbyCreepDeathCountList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  networthList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  observerWardsPlacedList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  reliableGoldList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  roshanKillsList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  runePicksupList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sentryWardsPlacedList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sharedGoldList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  streakList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  strengthTotalList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stunsList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalEarnedGoldList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalEarnedXpList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  towerDamageList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  towerKillsList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  unreliableGoldList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  wardsDestroyedList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  wardsPurchasedList?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type MatchReplayUploadPlayerType = {
  __typename?: 'MatchReplayUploadPlayerType';
  assists?: Maybe<Scalars['Byte']>;
  backpack0Id?: Maybe<Scalars['Short']>;
  backpack1Id?: Maybe<Scalars['Short']>;
  backpack2Id?: Maybe<Scalars['Short']>;
  deaths?: Maybe<Scalars['Byte']>;
  denies?: Maybe<Scalars['Short']>;
  experiencePerMinute?: Maybe<Scalars['Short']>;
  goldPerMinute?: Maybe<Scalars['Short']>;
  goldSpentOnBuybacks?: Maybe<Scalars['Int']>;
  goldSpentOnConsumables?: Maybe<Scalars['Int']>;
  goldSpentOnItems?: Maybe<Scalars['Int']>;
  goldSpentOnSupport?: Maybe<Scalars['Int']>;
  heroDamage: Scalars['Int'];
  heroHealing: Scalars['Int'];
  heroId?: Maybe<Scalars['Short']>;
  isDire: Scalars['Boolean'];
  isRadiant: Scalars['Boolean'];
  isVictory: Scalars['Boolean'];
  item0Id?: Maybe<Scalars['Short']>;
  item1Id?: Maybe<Scalars['Short']>;
  item2Id?: Maybe<Scalars['Short']>;
  item3Id?: Maybe<Scalars['Short']>;
  item4Id?: Maybe<Scalars['Short']>;
  item5Id?: Maybe<Scalars['Short']>;
  kills?: Maybe<Scalars['Byte']>;
  lane?: Maybe<Scalars['Byte']>;
  lastHits?: Maybe<Scalars['Short']>;
  level?: Maybe<Scalars['Byte']>;
  matchId?: Maybe<Scalars['Long']>;
  matchUploadTeamId: Scalars['Int'];
  networth: Scalars['Int'];
  playerSlot?: Maybe<Scalars['Byte']>;
  role?: Maybe<Scalars['Byte']>;
  stats?: Maybe<MatchReplayUploadPlayerStatsType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
  teamSlot?: Maybe<Scalars['Byte']>;
  totalGoldSpent: Scalars['Int'];
  towerDamage: Scalars['Int'];
  towerKills?: Maybe<Scalars['Short']>;
};

export type MatchReplayUploadStatsType = {
  __typename?: 'MatchReplayUploadStatsType';
  pickBans?: Maybe<Array<Maybe<MatchReplayUploadPickBanType>>>;
  spectators?: Maybe<Array<Maybe<Scalars['Long']>>>;
};

export type MatchReplayUploadTeamMemberType = {
  __typename?: 'MatchReplayUploadTeamMemberType';
  captainJackIdentityId?: Maybe<Scalars['Guid']>;
  isAdmin: Scalars['Boolean'];
  isDefaultTeam: Scalars['Boolean'];
  matchUploadTeamId: Scalars['Int'];
  steamAccount?: Maybe<SteamAccountType>;
};

export type MatchReplayUploadTeamType = {
  __typename?: 'MatchReplayUploadTeamType';
  creatorCaptainJackIdentityId?: Maybe<Scalars['Guid']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  isDefault?: Maybe<Scalars['Boolean']>;
  members?: Maybe<Array<Maybe<MatchReplayUploadTeamMemberType>>>;
  name: Scalars['String'];
  team?: Maybe<TeamType>;
  teamId: Scalars['Int'];
};

export type MatchStatsChatEventType = {
  __typename?: 'MatchStatsChatEventType';
  fromHeroId?: Maybe<Scalars['Short']>;
  isRadiant?: Maybe<Scalars['Boolean']>;
  pausedTick?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  toHeroId?: Maybe<Scalars['Short']>;
  type?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Short']>;
};

export type MatchStatsLaneReportFactionLaneObject = {
  __typename?: 'MatchStatsLaneReportFactionLaneObject';
  denyCount: Scalars['Int'];
  meleeCount: Scalars['Int'];
  neutralCount: Scalars['Int'];
  rangeCount: Scalars['Int'];
  siegeCount: Scalars['Int'];
};

export type MatchStatsLaneReportFactionObjectType = {
  __typename?: 'MatchStatsLaneReportFactionObjectType';
  midLane?: Maybe<MatchStatsLaneReportFactionLaneObject>;
  offLane?: Maybe<MatchStatsLaneReportFactionLaneObject>;
  safeLane?: Maybe<MatchStatsLaneReportFactionLaneObject>;
};

export type MatchStatsLaneReportType = {
  __typename?: 'MatchStatsLaneReportType';
  dire?: Maybe<Array<Maybe<MatchStatsLaneReportFactionObjectType>>>;
  radiant?: Maybe<Array<Maybe<MatchStatsLaneReportFactionObjectType>>>;
};

export type MatchStatsOutpostReportObjectType = {
  __typename?: 'MatchStatsOutpostReportObjectType';
  isControlledByRadiant: Scalars['Boolean'];
  isRadiantSide: Scalars['Boolean'];
  npcId?: Maybe<Scalars['Int']>;
};

export type MatchStatsPickBanType = {
  __typename?: 'MatchStatsPickBanType';
  adjustedWinRate?: Maybe<Scalars['Byte']>;
  bannedHeroId?: Maybe<Scalars['Short']>;
  baseWinRate?: Maybe<Scalars['Byte']>;
  heroId?: Maybe<Scalars['Short']>;
  isPick: Scalars['Boolean'];
  isRadiant?: Maybe<Scalars['Boolean']>;
  letter?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  playerIndex?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  wasBannedSuccessfully?: Maybe<Scalars['Boolean']>;
};

export type MatchStatsTowerDeathType = {
  __typename?: 'MatchStatsTowerDeathType';
  attacker?: Maybe<Scalars['Short']>;
  isRadiant?: Maybe<Scalars['Boolean']>;
  npcId?: Maybe<Scalars['Short']>;
  time?: Maybe<Scalars['Int']>;
};

export type MatchStatsTowerReportObjectType = {
  __typename?: 'MatchStatsTowerReportObjectType';
  hp?: Maybe<Scalars['Int']>;
  npcId?: Maybe<Scalars['Int']>;
};

export type MatchStatsTowerReportType = {
  __typename?: 'MatchStatsTowerReportType';
  outposts?: Maybe<Array<Maybe<MatchStatsOutpostReportObjectType>>>;
  towers?: Maybe<Array<Maybe<MatchStatsTowerReportObjectType>>>;
};

export type MatchStatsType = {
  __typename?: 'MatchStatsType';
  chatEvents?: Maybe<Array<Maybe<MatchStatsChatEventType>>>;
  /** This begins at -60 to 0 seconds (Index 0). */
  direKills?: Maybe<Array<Maybe<Scalars['Int']>>>;
  laneReport?: Maybe<MatchStatsLaneReportType>;
  matchId?: Maybe<Scalars['Long']>;
  pickBans?: Maybe<Array<Maybe<MatchStatsPickBanType>>>;
  /** Neural network predicted win rate graph by Minute starting at 20:00 time. */
  predictedWinRates?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantExperienceLeads?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantKills?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantNetworthLeads?: Maybe<Array<Maybe<Scalars['Int']>>>;
  towerDeaths?: Maybe<Array<Maybe<MatchStatsTowerDeathType>>>;
  towerStatus?: Maybe<Array<Maybe<MatchStatsTowerReportType>>>;
  /** Win rate graph by Minute starting at 0:00 time. */
  winRates?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
};

export type MatchType = {
  __typename?: 'MatchType';
  actualRank?: Maybe<Scalars['Short']>;
  analysisOutcome?: Maybe<Scalars['Byte']>;
  averageImp?: Maybe<Scalars['Byte']>;
  averageRank?: Maybe<Scalars['Short']>;
  barracksStatusDire?: Maybe<Scalars['Short']>;
  barracksStatusRadiant?: Maybe<Scalars['Short']>;
  bracket?: Maybe<Scalars['Byte']>;
  clusterId?: Maybe<Scalars['Int']>;
  didRadiantWin?: Maybe<Scalars['Boolean']>;
  direTeam?: Maybe<TeamType>;
  direTeamId?: Maybe<Scalars['Int']>;
  durationSeconds?: Maybe<Scalars['Int']>;
  endDateTime?: Maybe<Scalars['Long']>;
  firstBloodTime?: Maybe<Scalars['Int']>;
  gameMode?: Maybe<Scalars['Int']>;
  gameVersionId?: Maybe<Scalars['Short']>;
  id?: Maybe<Scalars['Long']>;
  isStats?: Maybe<Scalars['Boolean']>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']>;
  lobbyType?: Maybe<Scalars['Int']>;
  numHumanPlayers?: Maybe<Scalars['Int']>;
  parsedDateTime?: Maybe<Scalars['Long']>;
  playbackData?: Maybe<MatchPlaybackDataType>;
  players?: Maybe<Array<Maybe<MatchPlayerType>>>;
  predictedOutcomeWeight?: Maybe<Scalars['Byte']>;
  radiantTeam?: Maybe<TeamType>;
  radiantTeamId?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  regionId?: Maybe<Scalars['Byte']>;
  replaySalt?: Maybe<Scalars['Long']>;
  sequenceNum?: Maybe<Scalars['Long']>;
  series?: Maybe<SeriesType>;
  seriesId?: Maybe<Scalars['Long']>;
  spectators?: Maybe<Array<Maybe<MatchPlayerSpectatorType>>>;
  startDateTime?: Maybe<Scalars['Long']>;
  stats?: Maybe<MatchStatsType>;
  statsDateTime?: Maybe<Scalars['Long']>;
  tournamentId?: Maybe<Scalars['Int']>;
  tournamentRound?: Maybe<Scalars['Short']>;
  towerStatusDire?: Maybe<Scalars['Int']>;
  towerStatusRadiant?: Maybe<Scalars['Int']>;
};


export type MatchTypePlayersArgs = {
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type MatchesDayType = {
  __typename?: 'MatchesDayType';
  day: Scalars['Long'];
  matchCount: Scalars['Int'];
};

export type MatchesGameVersionType = {
  __typename?: 'MatchesGameVersionType';
  gameVersionId: Scalars['Short'];
  matchCount: Scalars['Int'];
};

export type MatchesHourType = {
  __typename?: 'MatchesHourType';
  hour: Scalars['Long'];
  matchCount: Scalars['Int'];
};

export type MatchesMonthType = {
  __typename?: 'MatchesMonthType';
  matchCount: Scalars['Int'];
  month: Scalars['Long'];
};

export type MatchesWeekType = {
  __typename?: 'MatchesWeekType';
  matchCount: Scalars['Int'];
  week: Scalars['Long'];
};

export type MatchmakingStatsType = {
  __typename?: 'MatchmakingStatsType';
  australia: Scalars['Int'];
  austria: Scalars['Int'];
  brazil: Scalars['Int'];
  chile: Scalars['Int'];
  dubai: Scalars['Int'];
  europe: Scalars['Int'];
  india: Scalars['Int'];
  japan: Scalars['Int'];
  perfectWorldTelecom: Scalars['Int'];
  perfectWorldTelecomGuangdong: Scalars['Int'];
  perfectWorldTelecomWuhan: Scalars['Int'];
  perfectWorldTelecomZhejiang: Scalars['Int'];
  perfectWorldUnicom: Scalars['Int'];
  perfectWorldUnicomTianjin: Scalars['Int'];
  peru: Scalars['Int'];
  singapore: Scalars['Int'];
  southAfrica: Scalars['Int'];
  stockholm: Scalars['Int'];
  taiwan: Scalars['Int'];
  time: Scalars['Long'];
  uSEast: Scalars['Int'];
  uSWest: Scalars['Int'];
};

export type MatchplaybackDataCourierEventObjectType = {
  __typename?: 'MatchplaybackDataCourierEventObjectType';
  didCastBoost?: Maybe<Scalars['Boolean']>;
  hp?: Maybe<Scalars['Int']>;
  isFlying?: Maybe<Scalars['Boolean']>;
  item0Id?: Maybe<Scalars['Int']>;
  item1Id?: Maybe<Scalars['Int']>;
  item2Id?: Maybe<Scalars['Int']>;
  item3Id?: Maybe<Scalars['Int']>;
  item4Id?: Maybe<Scalars['Int']>;
  item5Id?: Maybe<Scalars['Int']>;
  positionX?: Maybe<Scalars['Int']>;
  positionY?: Maybe<Scalars['Int']>;
  respawnTime?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
};

export type MergeProSteamAccountRequestType = {
  steamAccountId?: Maybe<Scalars['Long']>;
  name: Scalars['String'];
  realName?: Maybe<Scalars['String']>;
};

export type ModifierType = {
  __typename?: 'ModifierType';
  buffDuration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Short']>;
  isArmorReduce?: Maybe<Scalars['Boolean']>;
  isAttackReduce?: Maybe<Scalars['Boolean']>;
  isAttackSlow?: Maybe<Scalars['Boolean']>;
  isBanished?: Maybe<Scalars['Boolean']>;
  isBlind?: Maybe<Scalars['Boolean']>;
  isBreak?: Maybe<Scalars['Boolean']>;
  isCyclone?: Maybe<Scalars['Boolean']>;
  isDamageAmplified?: Maybe<Scalars['Boolean']>;
  isDisarm?: Maybe<Scalars['Boolean']>;
  isEthereal?: Maybe<Scalars['Boolean']>;
  isHex?: Maybe<Scalars['Boolean']>;
  isInvisible?: Maybe<Scalars['Boolean']>;
  isItem?: Maybe<Scalars['Boolean']>;
  isKnockback?: Maybe<Scalars['Boolean']>;
  isMovementDebuff?: Maybe<Scalars['Boolean']>;
  isMovementSlow?: Maybe<Scalars['Boolean']>;
  isMute?: Maybe<Scalars['Boolean']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  isShackle?: Maybe<Scalars['Boolean']>;
  isSilence?: Maybe<Scalars['Boolean']>;
  isSleep?: Maybe<Scalars['Boolean']>;
  isStun?: Maybe<Scalars['Boolean']>;
  isTaunt?: Maybe<Scalars['Boolean']>;
  isWeaken?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type NewsItemType = {
  __typename?: 'NewsItemType';
  author: Scalars['String'];
  contents: Scalars['String'];
  date?: Maybe<Scalars['Long']>;
  feedLabel: Scalars['String'];
  feedName: Scalars['String'];
  id?: Maybe<Scalars['Long']>;
  title: Scalars['String'];
  uri: Scalars['String'];
};

export type NpcStatType = {
  __typename?: 'NpcStatType';
  attackAnimationPoint?: Maybe<Scalars['Float']>;
  attackDamageMax?: Maybe<Scalars['Float']>;
  attackDamageMin?: Maybe<Scalars['Float']>;
  attackDesire?: Maybe<Scalars['String']>;
  attackRange?: Maybe<Scalars['Float']>;
  attackRangeBuffer?: Maybe<Scalars['Float']>;
  attackRate?: Maybe<Scalars['Float']>;
  autoAttacksByDefault?: Maybe<Scalars['Boolean']>;
  canBeDominated?: Maybe<Scalars['Boolean']>;
  combatClassAttack?: Maybe<Scalars['String']>;
  combatClassDefend?: Maybe<Scalars['String']>;
  dayTimeVision?: Maybe<Scalars['Float']>;
  hasInventory?: Maybe<Scalars['Boolean']>;
  isAncient?: Maybe<Scalars['Boolean']>;
  isNeutralUnitType?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Float']>;
  movementSpeed?: Maybe<Scalars['Float']>;
  movementTurnRate?: Maybe<Scalars['Float']>;
  nightTimeVision?: Maybe<Scalars['Float']>;
  projectileSpeed?: Maybe<Scalars['Float']>;
  statusHealth?: Maybe<Scalars['Float']>;
  statusHealthRegen?: Maybe<Scalars['Float']>;
  statusMana?: Maybe<Scalars['Float']>;
  statusManaRegen?: Maybe<Scalars['Float']>;
  teamName?: Maybe<Scalars['String']>;
  unitRelationshipClass?: Maybe<Scalars['String']>;
  wakesNeutrals?: Maybe<Scalars['Boolean']>;
};

export type NpcType = {
  __typename?: 'NpcType';
  id?: Maybe<Scalars['Short']>;
  name?: Maybe<Scalars['String']>;
  stat?: Maybe<NpcStatType>;
};

export type PageAghanimQuery = {
  __typename?: 'PageAghanimQuery';
  /** Returns all the Abilities for a Hero on the TI10 (2020) summer event. */
  heroAbility?: Maybe<Array<Maybe<Ti2020CustomGameHeroAbilityType>>>;
  /** Returns all the combinations of Heroes and their success on the TI10 (2020) summer event. */
  heroComposition?: Maybe<Ti2020CustomGameHeroCompositionType>;
  /** Returns all the combinations of Heroes and their success on the TI10 (2020) summer event. */
  heroCompositions?: Maybe<Array<Maybe<Ti2020CustomGameHeroCompositionType>>>;
  /** Returns a match by Id based on the TI10 (2020) summer event. */
  match?: Maybe<Ti2020CustomGameMatchType>;
  /** Returns a list of matches by based on the TI10 (2020) summer event. */
  matches?: Maybe<Array<Maybe<Ti2020CustomGameMatchType>>>;
  /** Returns all the Room Types by Difficulty for the TI10 (2020) summer event. */
  room?: Maybe<Array<Maybe<Ti2020CustomGameRoomType>>>;
  /** Returns all the Room Modifiers by Difficulty for the TI10 (2020) summer event. */
  roomModifier?: Maybe<Array<Maybe<Ti2020CustomGameRoomModifierType>>>;
  /** Returns the last 3 days winrate for each hero by Difficulty in the TI10 (2020) summer event. */
  winRate?: Maybe<Array<Maybe<Ti2020CustomGameHeroWinRateType>>>;
};


export type PageAghanimQueryHeroAbilityArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType;
  heroId: Scalars['Short'];
};


export type PageAghanimQueryHeroCompositionArgs = {
  heroIds: Array<Maybe<Scalars['Short']>>;
  difficulty: Ti2020CustomGameMatchDifficultyType;
};


export type PageAghanimQueryHeroCompositionsArgs = {
  request: FilterTi2020HeroCompositionRequestType;
};


export type PageAghanimQueryMatchArgs = {
  id: Scalars['Long'];
};


export type PageAghanimQueryMatchesArgs = {
  request?: Maybe<FilterTi2020MatchRequestType>;
};


export type PageAghanimQueryRoomArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType;
};


export type PageAghanimQueryRoomModifierArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType;
};


export type PageAghanimQueryWinRateArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType;
};

export type PageDireTide2020Query = {
  __typename?: 'PageDireTide2020Query';
  /** Returns a match by Id based on the 2020 Halloween Event DireTide. */
  match?: Maybe<DireTide2020CustomGameMatchType>;
  /** Returns a list of matches by based on the 2020 Halloween Event DireTide. */
  matches?: Maybe<Array<Maybe<DireTide2020CustomGameMatchType>>>;
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  winHour?: Maybe<Array<Maybe<DireTide2020CustomGameHeroWinDayType>>>;
};


export type PageDireTide2020QueryMatchArgs = {
  id: Scalars['Long'];
};


export type PageDireTide2020QueryMatchesArgs = {
  request?: Maybe<FilterDireTide2020CustomMatchRequestType>;
};


export type PageDireTide2020QueryWinHourArgs = {
  take?: Maybe<Scalars['Int']>;
};

export type PageMatchesQuery = {
  __typename?: 'PageMatchesQuery';
  /** Returns the last 12 days by day showing the amount of matches. */
  matchesStatsDay?: Maybe<Array<Maybe<MatchesDayType>>>;
  /** Returns the data by game version showing the amount of matches. */
  matchesStatsGameVersion?: Maybe<Array<Maybe<MatchesGameVersionType>>>;
  /** Returns the last 12 hours by hour showing the amount of matches. */
  matchesStatsHour?: Maybe<Array<Maybe<MatchesHourType>>>;
  /** Returns the data by month showing the amount of matches. */
  matchesStatsMonth?: Maybe<Array<Maybe<MatchesMonthType>>>;
  /** Returns the last 12 weeks by week showing the amount of matches. */
  matchesStatsWeek?: Maybe<Array<Maybe<MatchesWeekType>>>;
  /** Amount of players who are active and searching for a game in this region. */
  matchmakingStats?: Maybe<Array<Maybe<MatchmakingStatsType>>>;
};


export type PageMatchesQueryMatchesStatsDayArgs = {
  take?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
};


export type PageMatchesQueryMatchesStatsGameVersionArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
};


export type PageMatchesQueryMatchesStatsHourArgs = {
  take?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
};


export type PageMatchesQueryMatchesStatsMonthArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
};


export type PageMatchesQueryMatchesStatsWeekArgs = {
  take?: Maybe<Scalars['Int']>;
  bracketIds?: Maybe<Array<Maybe<RankBracket>>>;
  regionIds?: Maybe<Array<Maybe<BasicRegionType>>>;
  gameModeIds?: Maybe<Array<Maybe<GameModeEnumType>>>;
};

export type PagePlayerQuery = {
  __typename?: 'PagePlayerQuery';
  /** Used on the Player Page. Gives a detailed idea of the most recent games played by a specific player. */
  behaviorChart?: Maybe<PlayerBehaviorType>;
  /** Returns a general player summary of random set of predefinded filters. */
  breakdown?: Maybe<PlayerBreakdownType>;
  /** Returns the violations commited by a player in their last 500 games. */
  conduct?: Maybe<PlayerConductResponseType>;
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  heroesPerformance?: Maybe<Array<Maybe<PlayerHeroesPerformanceType>>>;
  /** A more in depth at a single player's single hero performance. */
  heroPerformance?: Maybe<PlayerPerformanceType>;
  /** Provided in-depth look of a player and how they proform globally on all heroes. */
  performance?: Maybe<PlayerPerformanceType>;
  /** Picked the top pros and annoucers and determines if you ever have played with them and when. */
  playedWithPro?: Maybe<PlayerPlayedWithProType>;
  /** Get very simple data for the on-hover of a player icon. */
  simpleSummary?: Maybe<PlayerCardHoverType>;
};


export type PagePlayerQueryBehaviorChartArgs = {
  request: PlayerBehaviorMatchesRequestType;
};


export type PagePlayerQueryBreakdownArgs = {
  request: PlayerBreakdownRequestType;
};


export type PagePlayerQueryHeroesPerformanceArgs = {
  request: PlayerHeroesPerformanceMatchesRequestType;
};


export type PagePlayerQueryHeroPerformanceArgs = {
  heroId: Scalars['Short'];
  request: PlayerHeroPerformanceMatchesRequestType;
};


export type PagePlayerQueryPerformanceArgs = {
  request: PlayerPerformanceMatchesRequestType;
};

export type PagePlayersQuery = {
  __typename?: 'PagePlayersQuery';
  /** Endpoint which breaks down all the SteamAccounts in the database by their current season rank. */
  steamAccountByRank?: Maybe<Array<Maybe<SteamAccountByRankType>>>;
};

export type PageQuery = {
  __typename?: 'PageQuery';
  /** Endpoints for the TI10 (2020) regarding the summer event. */
  aghanim?: Maybe<PageAghanimQuery>;
  /** Endpoints for the TI10 (2020) regarding the summer event. */
  direTide2020?: Maybe<PageDireTide2020Query>;
  /** Endpoints for Imp Related calls. */
  imp?: Maybe<ImpQuery>;
  /** STRATZ specific endpoints found on the /matches/ section of the website.  */
  matches?: Maybe<PageMatchesQuery>;
  /** STRATZ specific endpoints found on the /player/ section of the website. id is a required input field. */
  player?: Maybe<PagePlayerQuery>;
  /** STRATZ specific endpoints found on the /players/ section of the website.  */
  players?: Maybe<PagePlayersQuery>;
};


export type PageQueryPlayerArgs = {
  steamAccountId: Scalars['Long'];
};

export type PatchNoteLanguageType = {
  __typename?: 'PatchNoteLanguageType';
  abilityId?: Maybe<Scalars['Short']>;
  gameVersionId?: Maybe<Scalars['Short']>;
  generalId?: Maybe<Scalars['Byte']>;
  heroId?: Maybe<Scalars['Short']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Byte']>;
  itemId?: Maybe<Scalars['Short']>;
  languageId?: Maybe<Scalars['Byte']>;
  text?: Maybe<Scalars['String']>;
};

export type PlayerAbilityType = {
  __typename?: 'PlayerAbilityType';
  ability?: Maybe<AbilityType>;
  abilityId: Scalars['Int'];
  gameVersionId?: Maybe<Scalars['Short']>;
  isTalent?: Maybe<Scalars['Boolean']>;
  level: Scalars['Int'];
  time: Scalars['Int'];
};


export type PlayerAbilityTypeAbilityArgs = {
  gameVerionId?: Maybe<Scalars['Int']>;
  langaugeId?: Maybe<Scalars['Int']>;
};

export type PlayerActivitySummaryHeroType = {
  __typename?: 'PlayerActivitySummaryHeroType';
  heroId?: Maybe<Scalars['Int']>;
  lossCount?: Maybe<Scalars['Int']>;
  winCount?: Maybe<Scalars['Int']>;
};

export type PlayerActivitySummaryType = {
  __typename?: 'PlayerActivitySummaryType';
  activity?: Maybe<PlayerBehaviorActivity>;
  coreCount?: Maybe<Scalars['Int']>;
  heroes?: Maybe<Array<Maybe<PlayerActivitySummaryHeroType>>>;
  imp?: Maybe<Scalars['Int']>;
  matchCount?: Maybe<Scalars['Int']>;
  supportCount?: Maybe<Scalars['Int']>;
};

export type PlayerBadgeType = {
  __typename?: 'PlayerBadgeType';
  badgeId?: Maybe<Scalars['Byte']>;
  createdDateTime?: Maybe<Scalars['Long']>;
  slot?: Maybe<Scalars['Byte']>;
};

export type PlayerBattlePassResponseType = {
  __typename?: 'PlayerBattlePassResponseType';
  accountsAbove1000Count: Scalars['Int'];
  accountsAbove2000Count: Scalars['Int'];
  accountsAbove225Count: Scalars['Int'];
  accountsAbove75Count: Scalars['Int'];
  playerCount: Scalars['Int'];
  players?: Maybe<Array<Maybe<PlayerBattlePassType>>>;
};

export type PlayerBattlePassType = {
  __typename?: 'PlayerBattlePassType';
  activity?: Maybe<Scalars['Byte']>;
  level: Scalars['Int'];
  steamAccount?: Maybe<SteamAccountType>;
};

export enum PlayerBehaviorActivity {
  None = 'NONE',
  VeryLow = 'VERY_LOW',
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
  VeryHigh = 'VERY_HIGH',
  Intense = 'INTENSE'
}

export type PlayerBehaviorHeroType = {
  __typename?: 'PlayerBehaviorHeroType';
  avgImp?: Maybe<Scalars['Int']>;
  heroId: Scalars['Int'];
  lanes?: Maybe<Array<Maybe<PlayerBehaviorLaneType>>>;
  matchCount: Scalars['Int'];
  mvpCount?: Maybe<Scalars['Int']>;
  roles?: Maybe<Array<Maybe<PlayerBehaviorRoleType>>>;
  topCoreCount?: Maybe<Scalars['Int']>;
  topSupportCount?: Maybe<Scalars['Int']>;
  winCount: Scalars['Int'];
};

export type PlayerBehaviorLaneType = {
  __typename?: 'PlayerBehaviorLaneType';
  avgImp?: Maybe<Scalars['Int']>;
  lane?: Maybe<Scalars['Byte']>;
  matchCount: Scalars['Int'];
  mvpCount?: Maybe<Scalars['Int']>;
  roles?: Maybe<Array<Maybe<PlayerBehaviorRoleType>>>;
  topCoreCount?: Maybe<Scalars['Int']>;
  topSupportCount?: Maybe<Scalars['Int']>;
  winCount: Scalars['Int'];
};

export type PlayerBehaviorMatchPlayerType = {
  __typename?: 'PlayerBehaviorMatchPlayerType';
  award?: Maybe<Scalars['Byte']>;
  heroId?: Maybe<Scalars['Short']>;
  imp?: Maybe<Scalars['Short']>;
  isVictory?: Maybe<Scalars['Boolean']>;
  playerSlot?: Maybe<Scalars['Byte']>;
};

export type PlayerBehaviorMatchType = {
  __typename?: 'PlayerBehaviorMatchType';
  didRadiantWin?: Maybe<Scalars['Boolean']>;
  endDateTime?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  player?: Maybe<PlayerBehaviorMatchPlayerType>;
  rank?: Maybe<Scalars['Int']>;
};

export type PlayerBehaviorMatchesRequestType = {
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** Whether the match is a league match or not. */
  isLeague?: Maybe<Scalars['Boolean']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: Maybe<Scalars['Boolean']>;
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: Maybe<Scalars['Int']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: Maybe<Scalars['Int']>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: Maybe<Scalars['Boolean']>;
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The amount of matches to have returned in your query. Max 1000 */
  take?: Maybe<Scalars['Int']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
};

export type PlayerBehaviorRoleType = {
  __typename?: 'PlayerBehaviorRoleType';
  avgImp?: Maybe<Scalars['Int']>;
  lanes?: Maybe<Array<Maybe<PlayerBehaviorLaneType>>>;
  matchCount: Scalars['Int'];
  mvpCount?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  topCoreCount?: Maybe<Scalars['Int']>;
  topSupportCount?: Maybe<Scalars['Int']>;
  winCount: Scalars['Int'];
};

export type PlayerBehaviorType = {
  __typename?: 'PlayerBehaviorType';
  activity?: Maybe<PlayerBehaviorActivity>;
  avgImp?: Maybe<Scalars['Int']>;
  coreCount: Scalars['Int'];
  heroes?: Maybe<Array<Maybe<PlayerBehaviorHeroType>>>;
  lanes?: Maybe<Array<Maybe<PlayerBehaviorLaneType>>>;
  loseCount: Scalars['Int'];
  matchCount: Scalars['Int'];
  matches?: Maybe<Array<Maybe<PlayerBehaviorMatchType>>>;
  partyCount: Scalars['Int'];
  rankedCount: Scalars['Int'];
  roles?: Maybe<Array<Maybe<PlayerBehaviorRoleType>>>;
  soloCount: Scalars['Int'];
  supportCount: Scalars['Int'];
  unRankedCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type PlayerBreakdownObjectType = {
  __typename?: 'PlayerBreakdownObjectType';
  id?: Maybe<Scalars['Int']>;
  imp?: Maybe<Scalars['Int']>;
  lastSeenDateTime?: Maybe<Scalars['Long']>;
  matchCount: Scalars['Int'];
  win?: Maybe<Scalars['Int']>;
};

export type PlayerBreakdownRequestType = {
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** Whether the match is a league match or not. */
  isLeague?: Maybe<Scalars['Boolean']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: Maybe<Scalars['Boolean']>;
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: Maybe<Scalars['Int']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: Maybe<Scalars['Int']>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: Maybe<Scalars['Boolean']>;
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PlayerBreakdownType = {
  __typename?: 'PlayerBreakdownType';
  dayOfWeekMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  durationMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  factionMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  gameModeMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  heroAttributeMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  impMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  isStatsMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  laneMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  lobbyMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  matches?: Maybe<PlayerBreakdownObjectType>;
  partyMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  rankMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  regionMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  roleMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  timeOfDayMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  weekEndMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
};

export type PlayerCardHoverHeroType = {
  __typename?: 'PlayerCardHoverHeroType';
  heroId: Scalars['Int'];
  lossCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type PlayerCardHoverType = {
  __typename?: 'PlayerCardHoverType';
  activity?: Maybe<Scalars['Byte']>;
  coreCount?: Maybe<Scalars['Int']>;
  heroes?: Maybe<PlayerCardHoverHeroType>;
  imp?: Maybe<Scalars['Int']>;
  lastUpdateDateTime?: Maybe<Scalars['Long']>;
  matchCount?: Maybe<Scalars['Int']>;
  steamAccount?: Maybe<SteamAccountType>;
  supportCount?: Maybe<Scalars['Int']>;
};

export type PlayerCoachingLeaderboardResponseType = {
  __typename?: 'PlayerCoachingLeaderboardResponseType';
  accounts: Scalars['Int'];
  accountsAbove2500: Scalars['Int'];
  accountsAbove500: Scalars['Int'];
  players?: Maybe<PlayerCoachingLeaderboardType>;
};

export type PlayerCoachingLeaderboardType = {
  __typename?: 'PlayerCoachingLeaderboardType';
  activity?: Maybe<Scalars['Byte']>;
  firstMatchDateTime?: Maybe<Scalars['Long']>;
  lastMatchDateTime?: Maybe<Scalars['Long']>;
  matchCount: Scalars['Int'];
  rating: Scalars['Int'];
  steamAccount?: Maybe<SteamAccountType>;
  winCount: Scalars['Int'];
};

export type PlayerConductResponseType = {
  __typename?: 'PlayerConductResponseType';
  behaviorScore?: Maybe<Scalars['Short']>;
  lastIncidentDateTime?: Maybe<Scalars['Long']>;
  lastIncidentMatchId?: Maybe<Scalars['Long']>;
  recentMatchIncidents?: Maybe<Array<Maybe<Scalars['Short']>>>;
};

export type PlayerDraftHeroHighlightType = {
  __typename?: 'PlayerDraftHeroHighlightType';
  impAllTime?: Maybe<Scalars['Int']>;
  impLastMonth?: Maybe<Scalars['Int']>;
  impLastSixMonths?: Maybe<Scalars['Int']>;
  lastPlayed?: Maybe<Scalars['Long']>;
  matchCount?: Maybe<Scalars['Int']>;
  matchCountLastMonth?: Maybe<Scalars['Int']>;
  matchCountLastSixMonths?: Maybe<Scalars['Int']>;
  mvpCountLastMonth?: Maybe<Scalars['Int']>;
  topCoreCountLastMonth?: Maybe<Scalars['Int']>;
  topSupportCountLastMonth?: Maybe<Scalars['Int']>;
  winCount?: Maybe<Scalars['Int']>;
  winCountLastMonth?: Maybe<Scalars['Int']>;
  winCountLastSixMonths?: Maybe<Scalars['Int']>;
};

export type PlayerHeroDotaPlusLeaderboardRankResponseType = {
  __typename?: 'PlayerHeroDotaPlusLeaderboardRankResponseType';
  players?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankType>>>;
};

export type PlayerHeroPerformanceMatchesRequestType = {
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** Whether the match is a league match or not. */
  isLeague?: Maybe<Scalars['Boolean']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: Maybe<Scalars['Boolean']>;
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: Maybe<Scalars['Int']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: Maybe<Scalars['Int']>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: Maybe<Scalars['Boolean']>;
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PlayerHeroesPerformanceMatchesRequestType = {
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** Whether the match is a league match or not. */
  isLeague?: Maybe<Scalars['Boolean']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: Maybe<Scalars['Boolean']>;
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: Maybe<Scalars['Int']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: Maybe<Scalars['Int']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: Maybe<Scalars['Int']>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: Maybe<Scalars['Boolean']>;
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PlayerHeroesPerformanceScoreType = {
  __typename?: 'PlayerHeroesPerformanceScoreType';
  id: Scalars['Int'];
  imp?: Maybe<Scalars['Int']>;
  matchCount: Scalars['Int'];
  score: Scalars['Float'];
  winCount: Scalars['Int'];
};

export type PlayerHeroesPerformanceType = {
  __typename?: 'PlayerHeroesPerformanceType';
  activity?: Maybe<Scalars['Float']>;
  award: Scalars['Int'];
  best?: Maybe<Scalars['Float']>;
  duration: Scalars['Int'];
  experiencePerMinute: Scalars['Int'];
  goldPerMinute: Scalars['Int'];
  hero?: Maybe<HeroType>;
  heroId: Scalars['Short'];
  imp?: Maybe<Scalars['Int']>;
  kDA?: Maybe<Scalars['Float']>;
  laneScore?: Maybe<Array<Maybe<PlayerHeroesPerformanceScoreType>>>;
  lastPlayedDateTime?: Maybe<Scalars['Long']>;
  matchCount: Scalars['Int'];
  roleScore?: Maybe<Array<Maybe<PlayerHeroesPerformanceScoreType>>>;
  winCount: Scalars['Int'];
};

export type PlayerLeaderBoardByHeroType = {
  __typename?: 'PlayerLeaderBoardByHeroType';
  changeInRanking?: Maybe<Scalars['Short']>;
  createdDateTime?: Maybe<Scalars['Long']>;
  heroId?: Maybe<Scalars['Short']>;
  impAverage?: Maybe<Scalars['Byte']>;
  lane?: Maybe<MatchLaneType>;
  losses?: Maybe<Scalars['Byte']>;
  regionId?: Maybe<Scalars['Byte']>;
  role?: Maybe<MatchPlayerRoleType>;
  seasonBracket?: Maybe<Scalars['Byte']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
  wins?: Maybe<Scalars['Byte']>;
  winStreak?: Maybe<Scalars['Byte']>;
};

export type PlayerMatchesGroupByRequestType = {
  /** Only used when doing matchesGroupBy endpoint.  This is how the data will be grouped and makes your return Id field. */
  groupBy: FindMatchPlayerGroupBy;
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PlayerMatchesRequestType = {
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  playerList?: Maybe<FindMatchPlayerList>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: Maybe<Scalars['Int']>;
  /** The amount of matches to have returned in your query. Max 1000 */
  take?: Maybe<Scalars['Int']>;
  /** Only return matches before this match id. Can be used instead of Skip. */
  before?: Maybe<Scalars['Long']>;
  /** Only return matches after this match id. Can be used instead of Skip. */
  after?: Maybe<Scalars['Long']>;
};

export type PlayerPerformanceCompositionHeroType = {
  __typename?: 'PlayerPerformanceCompositionHeroType';
  heroId?: Maybe<Scalars['Short']>;
  matchCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type PlayerPerformanceCompositionType = {
  __typename?: 'PlayerPerformanceCompositionType';
  allies?: Maybe<Array<Maybe<PlayerPerformanceCompositionHeroType>>>;
  foes?: Maybe<Array<Maybe<PlayerPerformanceCompositionHeroType>>>;
};

export type PlayerPerformanceMatchesRequestType = {
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: Maybe<Scalars['Int']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** Whether the match is a league match or not. */
  isLeague?: Maybe<Scalars['Boolean']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: Maybe<Scalars['Boolean']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  tier?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** Whether the match was a victory or not for the specified player. */
  isVictory?: Maybe<Scalars['Boolean']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PlayerPerformancePositionObjectType = {
  __typename?: 'PlayerPerformancePositionObjectType';
  laneMatchCount: Scalars['Int'];
  laneType?: Maybe<Scalars['Byte']>;
  laneWinCount: Scalars['Int'];
};

export type PlayerPerformancePositionType = {
  __typename?: 'PlayerPerformancePositionType';
  lanes?: Maybe<Array<Maybe<PlayerPerformancePositionObjectType>>>;
  roleMatchCount: Scalars['Int'];
  roleType?: Maybe<Scalars['Byte']>;
  roleWinCount: Scalars['Int'];
};

export type PlayerPerformanceType = {
  __typename?: 'PlayerPerformanceType';
  assists?: Maybe<Scalars['Int']>;
  assistsAverage?: Maybe<Scalars['Decimal']>;
  awardMatchCount: Scalars['Int'];
  composition?: Maybe<PlayerPerformanceCompositionType>;
  cs?: Maybe<Scalars['Int']>;
  csAverage?: Maybe<Scalars['Decimal']>;
  deaths?: Maybe<Scalars['Int']>;
  deathsAverage?: Maybe<Scalars['Decimal']>;
  gpm?: Maybe<Scalars['Int']>;
  gpmAverage?: Maybe<Scalars['Decimal']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Array<Maybe<Scalars['Short']>>>;
  imp?: Maybe<Scalars['Int']>;
  kills?: Maybe<Scalars['Int']>;
  killsAverage?: Maybe<Scalars['Decimal']>;
  matchCount: Scalars['Int'];
  maxStreak: Scalars['Int'];
  mmrBracket: Scalars['Int'];
  mmrTier: Scalars['Int'];
  mvpCount: Scalars['Int'];
  /** Contains an array of 6 items which are listed as index 0 - 1st Pick, Index 1 - Pick 2nd, 3rd, Index 2 - Pick 4th, 5th, Index 3 - Pick 6th, Pick 7th, Index 4 - Pick 8th, 9ths, Index 5 - Pick 10th */
  pickOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  position?: Maybe<Array<Maybe<PlayerPerformancePositionType>>>;
  rank?: Maybe<Scalars['Int']>;
  streak: Scalars['Int'];
  topCoreCount: Scalars['Int'];
  topSupportCount: Scalars['Int'];
  winCount: Scalars['Int'];
  xpm?: Maybe<Scalars['Int']>;
  xpmAverage?: Maybe<Scalars['Decimal']>;
};

export type PlayerPlayedWithProPlayerMatchType = {
  __typename?: 'PlayerPlayedWithProPlayerMatchType';
  date?: Maybe<Scalars['Long']>;
  isVictory: Scalars['Boolean'];
  matchId?: Maybe<Scalars['Long']>;
};

export type PlayerPlayedWithProPlayerType = {
  __typename?: 'PlayerPlayedWithProPlayerType';
  name: Scalars['String'];
  steamId?: Maybe<Scalars['Long']>;
  vs?: Maybe<PlayerPlayedWithProPlayerMatchType>;
  with?: Maybe<PlayerPlayedWithProPlayerMatchType>;
};

export type PlayerPlayedWithProTeamType = {
  __typename?: 'PlayerPlayedWithProTeamType';
  players?: Maybe<Array<Maybe<PlayerPlayedWithProPlayerType>>>;
  teamId: Scalars['Int'];
  teamLogo: Scalars['String'];
  teamName: Scalars['String'];
};

export type PlayerPlayedWithProType = {
  __typename?: 'PlayerPlayedWithProType';
  casters?: Maybe<Array<Maybe<PlayerPlayedWithProPlayerType>>>;
  internationalWinners?: Maybe<Array<Maybe<PlayerPlayedWithProTeamType>>>;
  playedCount: Scalars['Int'];
  teams?: Maybe<Array<Maybe<PlayerPlayedWithProTeamType>>>;
  totalCount: Scalars['Int'];
};

export type PlayerSeasonLeaderBoardPlayerHeroType = {
  __typename?: 'PlayerSeasonLeaderBoardPlayerHeroType';
  heroId: Scalars['Int'];
  lossCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type PlayerSeasonLeaderBoardPlayerType = {
  __typename?: 'PlayerSeasonLeaderBoardPlayerType';
  activity?: Maybe<PlayerBehaviorActivity>;
  coreCount?: Maybe<Scalars['Int']>;
  heroes?: Maybe<PlayerSeasonLeaderBoardPlayerHeroType>;
  imp?: Maybe<Scalars['Int']>;
  lastUpdateDateTime?: Maybe<Scalars['Long']>;
  matchCount?: Maybe<Scalars['Int']>;
  rankVariance?: Maybe<Scalars['Int']>;
  steamAccount?: Maybe<SteamAccountType>;
  supportCount?: Maybe<Scalars['Int']>;
};

export type PlayerSeasonLeaderboardType = {
  __typename?: 'PlayerSeasonLeaderboardType';
  leaderboardDivision?: Maybe<LeaderboardDivision>;
  playerCount: Scalars['Int'];
  players?: Maybe<Array<Maybe<PlayerSeasonLeaderBoardPlayerType>>>;
};

export type PlayerType = {
  __typename?: 'PlayerType';
  activity?: Maybe<PlayerActivitySummaryType>;
  badges?: Maybe<Array<Maybe<PlayerBadgeType>>>;
  /** Used on the Player Page. Gives a detailed idea of the most recent games played by a specific player. */
  behaviorChart?: Maybe<PlayerBehaviorType>;
  behaviorScore?: Maybe<Scalars['Short']>;
  guildMember?: Maybe<GuildMemberType>;
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  heroesPerformance?: Maybe<Array<Maybe<PlayerHeroesPerformanceType>>>;
  /** A more in depth at a single player's single hero performance. */
  heroPerformance?: Maybe<PlayerPerformanceType>;
  identity?: Maybe<CaptainJackIdentityPublicProfileType>;
  imp?: Maybe<Scalars['Int']>;
  isFollowed?: Maybe<Scalars['Boolean']>;
  languageCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastMatchDate?: Maybe<Scalars['Long']>;
  lastMatchRegionId?: Maybe<Scalars['Byte']>;
  leaderboardRanks?: Maybe<Array<Maybe<SteamAccountSeasonLeaderBoardRankType>>>;
  matchCount?: Maybe<Scalars['Int']>;
  /** Find match details by steam account id. steamAccountId is a required input field. */
  matches?: Maybe<Array<Maybe<MatchType>>>;
  /** Find match details by steam account id. The return is modified to group the data by the GroupBy parameter. */
  matchesGroupBy?: Maybe<Array<Maybe<MatchGroupByType>>>;
  names?: Maybe<Array<Maybe<SteamAccountNameType>>>;
  /** Provided in-depth look of a player and how they proform globally on all heroes. */
  performance?: Maybe<PlayerPerformanceType>;
  /** Picked the top pros and annoucers and determines if you ever have played with them and when. */
  playedWithPro?: Maybe<PlayerPlayedWithProType>;
  ranks?: Maybe<Array<Maybe<SteamAccountSeasonRankType>>>;
  /** Get very simple data for the on-hover of a player icon. */
  simpleSummary?: Maybe<PlayerCardHoverType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
  team?: Maybe<SteamAccountTeamMemberType>;
  winCount?: Maybe<Scalars['Int']>;
};


export type PlayerTypeBehaviorChartArgs = {
  request: PlayerBehaviorMatchesRequestType;
};


export type PlayerTypeHeroesPerformanceArgs = {
  request: PlayerHeroesPerformanceMatchesRequestType;
};


export type PlayerTypeHeroPerformanceArgs = {
  heroId: Scalars['Short'];
  request: PlayerHeroPerformanceMatchesRequestType;
};


export type PlayerTypeMatchesArgs = {
  request: PlayerMatchesRequestType;
};


export type PlayerTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType;
};


export type PlayerTypePerformanceArgs = {
  request: PlayerPerformanceMatchesRequestType;
};


export type PlayerTypeRanksArgs = {
  seasonRankIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
};

export type PlayerUpdateAttributeDetailType = {
  __typename?: 'PlayerUpdateAttributeDetailType';
  agi: Scalars['Int'];
  int: Scalars['Int'];
  str: Scalars['Int'];
  time: Scalars['Int'];
};

export type PlayerUpdateBattleDetailType = {
  __typename?: 'PlayerUpdateBattleDetailType';
  damageBonus: Scalars['Int'];
  damageMinMax: Scalars['Int'];
  hpRegen: Scalars['Int'];
  mpRegen: Scalars['Int'];
  time: Scalars['Int'];
};

export type PlayerUpdateGoldDetailType = {
  __typename?: 'PlayerUpdateGoldDetailType';
  gold: Scalars['Int'];
  networth: Scalars['Int'];
  networthDifference: Scalars['Int'];
  time: Scalars['Int'];
  unreliableGold: Scalars['Int'];
};

export type PlayerUpdateHealthDetailType = {
  __typename?: 'PlayerUpdateHealthDetailType';
  hp: Scalars['Int'];
  maxHp: Scalars['Int'];
  maxMp: Scalars['Int'];
  mp: Scalars['Int'];
  time: Scalars['Int'];
};

export type PlayerUpdateLevelDetailType = {
  __typename?: 'PlayerUpdateLevelDetailType';
  level: Scalars['Int'];
  time: Scalars['Int'];
};

export type PlayerUpdatePositionDetailType = {
  __typename?: 'PlayerUpdatePositionDetailType';
  time: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type PlusDraftMissingLetterPlayerObjectType = {
  /** The slot of player. It is required to be in order from 0-9. */
  slot: Scalars['Int'];
  /** When a player has selected a hero, this is the id. If a null is sent, we will send back a hero list of possible heroes. */
  heroId?: Maybe<Scalars['Short']>;
  /** The rank this played is.  In the event he is anonymous, use the lowest rank player in the game. */
  rank?: Maybe<Scalars['Int']>;
  /** The lane this player will play. If a null is sent, we will assign the best possible lane. */
  position?: Maybe<MatchPlayerPositionType>;
  /** The order in which this player has picked. If a person has not picked, please send null. Send in order of 0-9. */
  order?: Maybe<Scalars['Byte']>;
  /** To determine the missing letter, isPicking will determine the score before the hero was selected and after the hero is selected. Only 1 person can have isPicking = true. */
  isPicking?: Maybe<Scalars['Boolean']>;
};

export type PlusDraftMissingLetterRequestType = {
  /** A list of all of the banned hero ids in the draft. */
  bans?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** A boolean representing if Radiant is first pick or not. */
  isRadiantFirstPick: Scalars['Boolean'];
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  gameMode: Scalars['Int'];
  /** A list of player request objects. */
  players: Array<Maybe<PlusDraftMissingLetterPlayerObjectType>>;
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  gameVersionId: Scalars['Short'];
};

export type PlusDraftPlayerHeroObjectType = {
  __typename?: 'PlusDraftPlayerHeroObjectType';
  heroId?: Maybe<Scalars['Short']>;
  letter?: Maybe<PlusLetterType>;
  pickValue?: Maybe<Scalars['Decimal']>;
  score?: Maybe<Scalars['Float']>;
  winValues?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
};

export type PlusDraftPlayerRequestType = {
  /** The steam id of the player. This will allow us to find player history on the player if he is not anonymous. */
  steamAccountId?: Maybe<Scalars['Long']>;
  /** The slot of player. It is required to be in order from 0-9. */
  slot: Scalars['Int'];
  /** When a player has selected a hero, this is the id. If a null is sent, we will send back a hero list of possible heroes. */
  heroId?: Maybe<Scalars['Short']>;
  /** This is used when a player has not selected a hero, but wishes to play a hero. It will form the draft around the fact that when its his turn to pick, it will be that hero. */
  suggestHeroId?: Maybe<Scalars['Short']>;
  /** The rank this played is.  In the event he is anonymous, use the lowest rank player in the game. */
  rank?: Maybe<Scalars['Byte']>;
  /** The role this player will play. If a null is sent, we will assign the best possible role. */
  position?: Maybe<MatchPlayerPositionType>;
  /** The role this player will play. If a null is sent, we will assign the best possible role. */
  order?: Maybe<Scalars['Byte']>;
};

export type PlusDraftPlayerType = {
  __typename?: 'PlusDraftPlayerType';
  heroes?: Maybe<Array<Maybe<PlusDraftPlayerHeroObjectType>>>;
  position?: Maybe<MatchPlayerPositionType>;
  positionValues?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  slot?: Maybe<Scalars['Byte']>;
};

export type PlusDraftRequestType = {
  /** The match Id or the lobby id of the match your sending.  This will cache data for the next calls to be quicker. */
  matchId: Scalars['Long'];
  /** A list of all of the banned hero ids in the draft. */
  bans?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** A boolean representing if Radiant is first pick or not. */
  isRadiantFirstPick: Scalars['Boolean'];
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  gameMode: Scalars['Int'];
  /** A list of player request objects. */
  players: Array<Maybe<PlusDraftPlayerRequestType>>;
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  gameVersionId: Scalars['Short'];
};

export type PlusDraftType = {
  __typename?: 'PlusDraftType';
  durationValues?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  midOutcome?: Maybe<Scalars['Decimal']>;
  offOutcome?: Maybe<Scalars['Decimal']>;
  players?: Maybe<Array<Maybe<PlusDraftPlayerType>>>;
  safeOutcome?: Maybe<Scalars['Decimal']>;
  winValues?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
};

export type PlusHeroTeamStatusAveragesType = {
  __typename?: 'PlusHeroTeamStatusAveragesType';
  cs?: Maybe<Scalars['Decimal']>;
  deaths?: Maybe<Scalars['Decimal']>;
  disableCount?: Maybe<Scalars['Decimal']>;
  disableDuration?: Maybe<Scalars['Decimal']>;
  healingAllies?: Maybe<Scalars['Decimal']>;
  magicalDamage?: Maybe<Scalars['Decimal']>;
  magicalDamageReceived?: Maybe<Scalars['Decimal']>;
  physicalDamage?: Maybe<Scalars['Decimal']>;
  physicalDamageReceived?: Maybe<Scalars['Decimal']>;
  pureDamage?: Maybe<Scalars['Decimal']>;
  pureDamageReceived?: Maybe<Scalars['Decimal']>;
  purgeModifiers?: Maybe<Scalars['Decimal']>;
  slowCount?: Maybe<Scalars['Decimal']>;
  slowDuration?: Maybe<Scalars['Decimal']>;
  stunCount?: Maybe<Scalars['Decimal']>;
  stunDuration?: Maybe<Scalars['Decimal']>;
  towerDamage?: Maybe<Scalars['Decimal']>;
  weakenCount?: Maybe<Scalars['Decimal']>;
  weakenDuration?: Maybe<Scalars['Decimal']>;
};

export type PlusHeroTeamStatusDetailType = {
  __typename?: 'PlusHeroTeamStatusDetailType';
  averages?: Maybe<PlusHeroTeamStatusAveragesType>;
  basicBracket?: Maybe<RankBracketHeroTimeDetail>;
  heroId: Scalars['Int'];
  position?: Maybe<MatchPlayerPositionType>;
};

export type PlusHoverBanType = {
  __typename?: 'PlusHoverBanType';
  flags?: Maybe<Scalars['Byte']>;
  heroId?: Maybe<Scalars['Short']>;
  score?: Maybe<Scalars['Decimal']>;
};

export type PlusHoverType = {
  __typename?: 'PlusHoverType';
  bans?: Maybe<Array<Maybe<PlusHoverBanType>>>;
  players?: Maybe<Array<Maybe<PlusPlayerHoverType>>>;
};

export enum PlusLetterType {
  F = 'F',
  D = 'D',
  C = 'C',
  B = 'B',
  A = 'A',
  S = 'S'
}

export type PlusPlayerHoverHeroType = {
  __typename?: 'PlusPlayerHoverHeroType';
  heroId?: Maybe<Scalars['Short']>;
  lossCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type PlusPlayerHoverPlayerType = {
  __typename?: 'PlusPlayerHoverPlayerType';
  lastMatchDateTime?: Maybe<Scalars['Long']>;
  matchCount: Scalars['Int'];
  steamAccountId?: Maybe<Scalars['Long']>;
  winCount: Scalars['Int'];
};

export type PlusPlayerHoverRequestType = {
  /** An array of steam account ids to limit the query to only return matches with these steam account ids. There is a maximum of 10 steam account ids allowed. */
  steamAccountIds: Array<Maybe<Scalars['Long']>>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** The amount of matches to have returned in your query. Max 1000 */
  take?: Maybe<Scalars['Int']>;
  /** Should our Networks attempt to try to make Radiant Win the draft or Dire. */
  shouldRadiantWin?: Maybe<Scalars['Boolean']>;
};

export type PlusPlayerHoverType = {
  __typename?: 'PlusPlayerHoverType';
  activity?: Maybe<Scalars['Byte']>;
  behaviorScore?: Maybe<Scalars['Short']>;
  coreCount?: Maybe<Scalars['Int']>;
  enemies?: Maybe<Array<Maybe<PlusPlayerHoverPlayerType>>>;
  friends?: Maybe<Array<Maybe<PlusPlayerHoverPlayerType>>>;
  heroes?: Maybe<Array<Maybe<PlusPlayerHoverHeroType>>>;
  heroesExperience?: Maybe<Array<Maybe<Scalars['Short']>>>;
  imp?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastMatchDateTime?: Maybe<Scalars['Long']>;
  matchCount?: Maybe<Scalars['Int']>;
  steamAccount?: Maybe<SteamAccountType>;
  supportCount?: Maybe<Scalars['Int']>;
  winCount: Scalars['Int'];
};

export type PlusQuery = {
  __typename?: 'PlusQuery';
  /** The main call for STRATZ Plus. It will return back probability data based on a draft of players that were given. */
  draft?: Maybe<PlusDraftType>;
  /** To save CPU cycles we limit the amount of heroes a person can play. If a player picks a hero outside the default list, we have no idea how good the hero would of been. You can call this endpoint to update the grade letter for that hero selection. */
  draftMissingLetter?: Maybe<PlusLetterType>;
  /** Returns back basic data about the user playing a specific hero.  Used in the Draft app to show post-pick data. */
  playerHeroHighlight?: Maybe<PlayerDraftHeroHighlightType>;
  /** Gets a list of data of the players in the match, can send a max of 10 people.  If a user blocks their data on STRATZ, that data will not be returned. */
  playerMatchHistory?: Maybe<PlusHoverType>;
  /** Returns a set of events which contain each hero and their averages in each of the respected categories, sorted by rank bracket. */
  teamHeroStatus?: Maybe<Array<Maybe<PlusHeroTeamStatusDetailType>>>;
};


export type PlusQueryDraftArgs = {
  request: PlusDraftRequestType;
};


export type PlusQueryDraftMissingLetterArgs = {
  request: PlusDraftMissingLetterRequestType;
};


export type PlusQueryPlayerHeroHighlightArgs = {
  steamAccountId: Scalars['Int'];
  heroId: Scalars['Int'];
};


export type PlusQueryPlayerMatchHistoryArgs = {
  request: PlusPlayerHoverRequestType;
};


export type PlusQueryTeamHeroStatusArgs = {
  rankBracket: RankBracketHeroTimeDetail;
};

export type ProPlayerFollowType = {
  __typename?: 'ProPlayerFollowType';
  activity?: Maybe<Scalars['Int']>;
  coreCount: Scalars['Int'];
  matchCount: Scalars['Int'];
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
  supportCount: Scalars['Int'];
};

export type ProSteamAccountType = {
  __typename?: 'ProSteamAccountType';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  birthday?: Maybe<Scalars['Long']>;
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookLink?: Maybe<Scalars['String']>;
  fantasyRole?: Maybe<Scalars['Byte']>;
  instagramLink?: Maybe<Scalars['String']>;
  isLocked: Scalars['Boolean'];
  isPro: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['Byte']>;
  romanizedRealName?: Maybe<Scalars['String']>;
  signatureHeroes?: Maybe<Array<Maybe<Scalars['String']>>>;
  sponsor?: Maybe<Scalars['String']>;
  statuses?: Maybe<Scalars['Byte']>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Int']>;
  totalEarnings: Scalars['Int'];
  twitchLink?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  vkLink?: Maybe<Scalars['String']>;
  weiboLink?: Maybe<Scalars['String']>;
  youTubeLink?: Maybe<Scalars['String']>;
};

export type RabbitDetailType = {
  __typename?: 'RabbitDetailType';
  isOnline: Scalars['Boolean'];
  lastUpdated?: Maybe<Scalars['Long']>;
  matchDetail?: Maybe<RabbitQueueDetailType>;
  matchDetailDelay?: Maybe<RabbitQueueDetailType>;
  matchHistory?: Maybe<RabbitQueueDetailType>;
  matchLive?: Maybe<RabbitQueueDetailType>;
  matchStats?: Maybe<RabbitQueueDetailType>;
  steamAccount?: Maybe<RabbitQueueDetailType>;
};

export type RabbitQueueDetailType = {
  __typename?: 'RabbitQueueDetailType';
  queueCount: Scalars['Int'];
  queueInRate?: Maybe<Scalars['Decimal']>;
  queueOutRate?: Maybe<Scalars['Decimal']>;
};

export enum RankBracket {
  Uncalibrated = 'UNCALIBRATED',
  Herald = 'HERALD',
  Guardian = 'GUARDIAN',
  Crusader = 'CRUSADER',
  Archon = 'ARCHON',
  Legend = 'LEGEND',
  Ancient = 'ANCIENT',
  Divine = 'DIVINE',
  Immortal = 'IMMORTAL'
}

export enum RankBracketHeroTimeDetail {
  Uncalibrated = 'UNCALIBRATED',
  HeraldGuardian = 'HERALD_GUARDIAN',
  CrusaderArchon = 'CRUSADER_ARCHON',
  LegendAncient = 'LEGEND_ANCIENT',
  DivineImmortal = 'DIVINE_IMMORTAL',
  Filtered = 'FILTERED',
  All = 'ALL'
}

export type RecentHighImpType = {
  __typename?: 'RecentHighImpType';
  imp?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']>;
};

export type RecentRampageType = {
  __typename?: 'RecentRampageType';
  hero?: Maybe<HeroType>;
  heroesKilled?: Maybe<Array<Maybe<Scalars['Short']>>>;
  heroId?: Maybe<Scalars['Short']>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']>;
};

export type RecentWinStreakType = {
  __typename?: 'RecentWinStreakType';
  firstWonMatchDateTime?: Maybe<Scalars['DateTime']>;
  lastWonMatchDateTime?: Maybe<Scalars['DateTime']>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']>;
  /** The status of the win streak, Ended (0) or Ongoing (1). */
  status?: Maybe<Scalars['Int']>;
  winStreakCount?: Maybe<Scalars['Int']>;
};

export type RegionType = {
  __typename?: 'RegionType';
  clientName?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Byte']>;
  langKey?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Decimal']>;
  leaderboardDivision?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Decimal']>;
  matchGroup?: Maybe<Scalars['Byte']>;
  name?: Maybe<Scalars['String']>;
  weekendTourneyDivision?: Maybe<Scalars['String']>;
};

export enum RuneAction {
  Pickup = 'PICKUP',
  Bottle = 'BOTTLE'
}

export enum RuneEnums {
  Haste = 'HASTE',
  Regen = 'REGEN',
  DoubleDamage = 'DOUBLE_DAMAGE',
  Illusion = 'ILLUSION',
  Invisibility = 'INVISIBILITY',
  Bounty = 'BOUNTY',
  Arcane = 'ARCANE',
  Water = 'WATER'
}

export enum Search {
  Players = 'PLAYERS',
  Matches = 'MATCHES',
  Leagues = 'LEAGUES',
  Teams = 'TEAMS',
  ProPlayers = 'PRO_PLAYERS',
  Casters = 'CASTERS',
  Guilds = 'GUILDS'
}

export type SearchType = {
  __typename?: 'SearchType';
  casters?: Maybe<Array<Maybe<SteamAccountType>>>;
  direTideMatches?: Maybe<Array<Maybe<DireTide2020CustomGameMatchType>>>;
  guild?: Maybe<GuildType>;
  leagues?: Maybe<Array<Maybe<LeagueType>>>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  players?: Maybe<Array<Maybe<SteamAccountType>>>;
  proPlayers?: Maybe<Array<Maybe<SteamAccountType>>>;
  teams?: Maybe<Array<Maybe<TeamType>>>;
};

export enum Series {
  BestOfOne = 'BEST_OF_ONE',
  BestOfThree = 'BEST_OF_THREE',
  BestOfFive = 'BEST_OF_FIVE',
  BestOfTwo = 'BEST_OF_TWO'
}

export type SeriesType = {
  __typename?: 'SeriesType';
  id: Scalars['Long'];
  lastMatchDateTime?: Maybe<Scalars['Long']>;
  leagueId?: Maybe<Scalars['Int']>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  teamOne?: Maybe<TeamType>;
  teamOneId?: Maybe<Scalars['Int']>;
  teamOneWinCount?: Maybe<Scalars['Short']>;
  teamTwo?: Maybe<TeamType>;
  teamTwoId?: Maybe<Scalars['Int']>;
  teamTwoWinCount?: Maybe<Scalars['Short']>;
  type?: Maybe<Series>;
  winningTeamId?: Maybe<Scalars['Int']>;
};

export type ServerStatusType = {
  __typename?: 'ServerStatusType';
  isRedisOnline: Scalars['Boolean'];
  rabbitDetail?: Maybe<RabbitDetailType>;
  steamApiDetail?: Maybe<SteamApiDetailType>;
};


export type SpiritBearInventoryObjectType = {
  __typename?: 'SpiritBearInventoryObjectType';
  itemId?: Maybe<Scalars['Short']>;
};

export type SpiritBearInventoryType = {
  __typename?: 'SpiritBearInventoryType';
  backPack0?: Maybe<SpiritBearInventoryObjectType>;
  backPack1?: Maybe<SpiritBearInventoryObjectType>;
  backPack2?: Maybe<SpiritBearInventoryObjectType>;
  item0?: Maybe<SpiritBearInventoryObjectType>;
  item1?: Maybe<SpiritBearInventoryObjectType>;
  item2?: Maybe<SpiritBearInventoryObjectType>;
  item3?: Maybe<SpiritBearInventoryObjectType>;
  item4?: Maybe<SpiritBearInventoryObjectType>;
  item5?: Maybe<SpiritBearInventoryObjectType>;
  neutral0?: Maybe<SpiritBearInventoryObjectType>;
  teleport0?: Maybe<SpiritBearInventoryObjectType>;
  time: Scalars['Int'];
};

export type SteamAccountBattlePassType = {
  __typename?: 'SteamAccountBattlePassType';
  eventId?: Maybe<Scalars['Byte']>;
  level?: Maybe<Scalars['Int']>;
  steamId?: Maybe<Scalars['Long']>;
};

export type SteamAccountByRankType = {
  __typename?: 'SteamAccountByRankType';
  playerCount?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Byte']>;
};

export type SteamAccountNameType = {
  __typename?: 'SteamAccountNameType';
  lastSeenDateTime?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
};

export type SteamAccountSeasonLeaderBoardRankType = {
  __typename?: 'SteamAccountSeasonLeaderBoardRankType';
  asOfDateTime?: Maybe<Scalars['Long']>;
  rank?: Maybe<Scalars['Short']>;
  seasonLeaderBoardDivisionId?: Maybe<Scalars['Byte']>;
  seasonRankId?: Maybe<Scalars['Byte']>;
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type SteamAccountSeasonRankType = {
  __typename?: 'SteamAccountSeasonRankType';
  asOfDateTime?: Maybe<Scalars['Long']>;
  isCore?: Maybe<Scalars['Boolean']>;
  rank?: Maybe<Scalars['Byte']>;
  seasonRankId?: Maybe<Scalars['Byte']>;
};

export type SteamAccountTeamMemberType = {
  __typename?: 'SteamAccountTeamMemberType';
  firstMatchDateTime?: Maybe<Scalars['Long']>;
  firstMatchId?: Maybe<Scalars['Long']>;
  lastMatchDateTime?: Maybe<Scalars['Long']>;
  lastMatchId?: Maybe<Scalars['Long']>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Long']>;
};

export type SteamAccountType = {
  __typename?: 'SteamAccountType';
  avatar?: Maybe<Scalars['String']>;
  battlepass?: Maybe<Array<Maybe<SteamAccountBattlePassType>>>;
  cityId?: Maybe<Scalars['Int']>;
  communityVisibleState?: Maybe<Scalars['Int']>;
  countryCode?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isAnonymous: Scalars['Boolean'];
  isDotaPlusSubscriber?: Maybe<Scalars['Boolean']>;
  isStratzAnonymous: Scalars['Boolean'];
  lastLogOff?: Maybe<Scalars['Long']>;
  lastMatchDateTime?: Maybe<Scalars['Long']>;
  lastMatchRegionId?: Maybe<Scalars['Byte']>;
  name?: Maybe<Scalars['String']>;
  primaryClanId?: Maybe<Scalars['Long']>;
  profileUri: Scalars['String'];
  proSteamAccount?: Maybe<ProSteamAccountType>;
  realName?: Maybe<Scalars['String']>;
  seasonLeaderboardDivisionId?: Maybe<Scalars['Byte']>;
  seasonLeaderboardRank?: Maybe<Scalars['Short']>;
  seasonRank?: Maybe<Scalars['Byte']>;
  smurfFlag?: Maybe<Scalars['Byte']>;
  stateCode?: Maybe<Scalars['String']>;
  timeCreated?: Maybe<Scalars['Long']>;
};

export type SteamApiDetailOutageType = {
  __typename?: 'SteamApiDetailOutageType';
  dateTime?: Maybe<Scalars['Long']>;
  secondsOffline?: Maybe<Scalars['Int']>;
};

export type SteamApiDetailType = {
  __typename?: 'SteamApiDetailType';
  isOnline: Scalars['Boolean'];
  outages?: Maybe<Array<Maybe<SteamApiDetailOutageType>>>;
};

export type StratzQuery = {
  __typename?: 'StratzQuery';
  admin?: Maybe<AdminQuery>;
  /** Find user details of the currently logged in user. */
  blogs?: Maybe<Array<Maybe<BlogType>>>;
  /** Returns a list of languages and an Id for reference. This is used throughout the site. */
  languages?: Maybe<Array<Maybe<LanguageType>>>;
  /** Should a match fail to download or a new parse is needed for new data, call retry will tell our system to download this match again. This call is extremely limited. */
  matchRetry?: Maybe<Scalars['Boolean']>;
  /** Returns a list of News Items released by Dota 2 directly. */
  news?: Maybe<Array<Maybe<NewsItemType>>>;
  page?: Maybe<PageQuery>;
  search?: Maybe<SearchType>;
  /** Shows the availability to major components required in the STRATZ foundation. */
  status?: Maybe<ServerStatusType>;
  /** Home page data that shows the total count of players and matches in our database. */
  ticker?: Maybe<Array<Maybe<Scalars['Int']>>>;
  user?: Maybe<UserQuery>;
};


export type StratzQueryBlogsArgs = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
};


export type StratzQueryMatchRetryArgs = {
  id: Scalars['Long'];
};


export type StratzQuerySearchArgs = {
  request?: Maybe<FilterSearchRequestType>;
};

export enum Streak {
  MultiKill = 'MULTI_KILL',
  KillStreak = 'KILL_STREAK'
}

export type StreakEventType = {
  __typename?: 'StreakEventType';
  heroId?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
  type?: Maybe<Streak>;
  value: Scalars['Int'];
};

export type Ti2020CustomGameDepthListAscensionAbilitiesType = {
  __typename?: 'TI2020CustomGameDepthListAscensionAbilitiesType';
  abilityId?: Maybe<Scalars['Short']>;
  modifierId?: Maybe<Scalars['Short']>;
  type?: Maybe<Ti2020CustomGameDepthListAscensionAbilitiesType>;
};

export type Ti2020CustomGameHeroAbilityType = {
  __typename?: 'TI2020CustomGameHeroAbilityType';
  customAbilityId?: Maybe<Scalars['Short']>;
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>;
  heroId?: Maybe<Scalars['Short']>;
  matchCount?: Maybe<Scalars['Int']>;
  pickCount?: Maybe<Scalars['Int']>;
  winCount?: Maybe<Scalars['Int']>;
};

export type Ti2020CustomGameHeroCompositionType = {
  __typename?: 'TI2020CustomGameHeroCompositionType';
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>;
  duration?: Maybe<Scalars['Int']>;
  heroId1?: Maybe<Scalars['Short']>;
  heroId2?: Maybe<Scalars['Short']>;
  heroId3?: Maybe<Scalars['Short']>;
  heroId4?: Maybe<Scalars['Short']>;
  matchCount?: Maybe<Scalars['Int']>;
  wilsonScore?: Maybe<Scalars['Decimal']>;
  winCount?: Maybe<Scalars['Int']>;
};

export type Ti2020CustomGameHeroWinRateType = {
  __typename?: 'TI2020CustomGameHeroWinRateType';
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>;
  heroId?: Maybe<Scalars['Short']>;
  matchCount?: Maybe<Scalars['Int']>;
  winCount?: Maybe<Scalars['Int']>;
};

export type Ti2020CustomGameMatchDepthListType = {
  __typename?: 'TI2020CustomGameMatchDepthListType';
  ascensionAbilities?: Maybe<Array<Maybe<Ti2020CustomGameDepthListAscensionAbilitiesType>>>;
  selectedElite?: Maybe<Scalars['Boolean']>;
  selectedEncounter?: Maybe<Ti2020CustomGameDepthListEncounterType>;
  selectedEncounterType?: Maybe<Scalars['Byte']>;
  selectedHidden?: Maybe<Scalars['Boolean']>;
  selectedReward?: Maybe<Ti2020CustomGameDepthListRewardType>;
  unselectedElite?: Maybe<Scalars['Boolean']>;
  unselectedEncounter?: Maybe<Ti2020CustomGameDepthListEncounterType>;
  unselectedHidden?: Maybe<Scalars['Boolean']>;
  unselectedReward?: Maybe<Ti2020CustomGameDepthListRewardType>;
};

export type Ti2020CustomGameMatchType = {
  __typename?: 'TI2020CustomGameMatchType';
  arcaneFragments?: Maybe<Scalars['Short']>;
  battlePoints?: Maybe<Scalars['Short']>;
  clusterId?: Maybe<Scalars['Short']>;
  depth?: Maybe<Scalars['Byte']>;
  depthList?: Maybe<Array<Maybe<Ti2020CustomGameMatchDepthListType>>>;
  didWin?: Maybe<Scalars['Boolean']>;
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>;
  durationSeconds?: Maybe<Scalars['Short']>;
  endDateTime?: Maybe<Scalars['Long']>;
  gameMode?: Maybe<Scalars['Byte']>;
  goldBags?: Maybe<Scalars['Short']>;
  id?: Maybe<Scalars['Long']>;
  lobbyType?: Maybe<Scalars['Byte']>;
  numDeaths?: Maybe<Scalars['Short']>;
  numHumanPlayers?: Maybe<Scalars['Byte']>;
  numKills?: Maybe<Scalars['Short']>;
  players?: Maybe<Array<Maybe<Ti2020CustomGamePlayerType>>>;
  regionId?: Maybe<Scalars['Byte']>;
  replaySalt?: Maybe<Scalars['Long']>;
  score?: Maybe<Scalars['Int']>;
  seed?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['Long']>;
};


export type Ti2020CustomGameMatchTypePlayersArgs = {
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type Ti2020CustomGamePlayerBlessingType = {
  __typename?: 'TI2020CustomGamePlayerBlessingType';
  type?: Maybe<Ti2020CustomGamePlayerBlessingType>;
  value?: Maybe<Scalars['Short']>;
};

export type Ti2020CustomGamePlayerDepthListType = {
  __typename?: 'TI2020CustomGamePlayerDepthListType';
  goldBags?: Maybe<Scalars['Short']>;
  kills?: Maybe<Scalars['Short']>;
  level?: Maybe<Scalars['Byte']>;
  networth?: Maybe<Scalars['Int']>;
  numDeaths?: Maybe<Scalars['Short']>;
  rarity?: Maybe<Scalars['Byte']>;
  selectedRewardAbility?: Maybe<AbilityCustomGameType>;
  selectedRewardAbilityId?: Maybe<Scalars['Short']>;
  selectedRewardImageAbilityId?: Maybe<Scalars['Short']>;
  unSelectedRewardAbility1?: Maybe<AbilityCustomGameType>;
  unSelectedRewardAbility2?: Maybe<AbilityCustomGameType>;
  unSelectedRewardAbilityId1?: Maybe<Scalars['Short']>;
  unSelectedRewardAbilityId2?: Maybe<Scalars['Short']>;
};


export type Ti2020CustomGamePlayerDepthListTypeSelectedRewardAbilityArgs = {
  langaugeId?: Maybe<Scalars['Int']>;
};


export type Ti2020CustomGamePlayerDepthListTypeUnSelectedRewardAbility1Args = {
  langaugeId?: Maybe<Scalars['Int']>;
};


export type Ti2020CustomGamePlayerDepthListTypeUnSelectedRewardAbility2Args = {
  langaugeId?: Maybe<Scalars['Int']>;
};

export type Ti2020CustomGamePlayerType = {
  __typename?: 'TI2020CustomGamePlayerType';
  arcaneFragments?: Maybe<Scalars['Short']>;
  blessings?: Maybe<Array<Maybe<Ti2020CustomGamePlayerBlessingType>>>;
  bonusArcaneFragments?: Maybe<Scalars['Short']>;
  deaths?: Maybe<Scalars['Byte']>;
  depthList?: Maybe<Array<Maybe<Ti2020CustomGamePlayerDepthListType>>>;
  experiencePerMinute?: Maybe<Scalars['Short']>;
  goldBags?: Maybe<Scalars['Short']>;
  goldPerMinute?: Maybe<Scalars['Short']>;
  goldSpent?: Maybe<Scalars['Int']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Short']>;
  isVictory: Scalars['Boolean'];
  item0Id?: Maybe<Scalars['Short']>;
  item1Id?: Maybe<Scalars['Short']>;
  item2Id?: Maybe<Scalars['Short']>;
  item3Id?: Maybe<Scalars['Short']>;
  item4Id?: Maybe<Scalars['Short']>;
  item5Id?: Maybe<Scalars['Short']>;
  leaverStatus?: Maybe<Scalars['Byte']>;
  level?: Maybe<Scalars['Byte']>;
  matchId?: Maybe<Scalars['Long']>;
  networth?: Maybe<Scalars['Int']>;
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars['Short']>;
  neutralItemId?: Maybe<Scalars['Short']>;
  numLastHits?: Maybe<Scalars['Short']>;
  partyId?: Maybe<Scalars['Byte']>;
  playerSlot?: Maybe<Scalars['Byte']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']>;
};

export type Ti2020CustomGameRoomModifierType = {
  __typename?: 'TI2020CustomGameRoomModifierType';
  deathCount?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>;
  eliteDeathCount?: Maybe<Scalars['Int']>;
  eliteMatchCount?: Maybe<Scalars['Int']>;
  eliteWinCount?: Maybe<Scalars['Int']>;
  matchCount?: Maybe<Scalars['Int']>;
  modifierId?: Maybe<Scalars['Short']>;
  winCount?: Maybe<Scalars['Int']>;
};

export type Ti2020CustomGameRoomType = {
  __typename?: 'TI2020CustomGameRoomType';
  deathCount?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>;
  eliteDeathCount?: Maybe<Scalars['Int']>;
  eliteMatchCount?: Maybe<Scalars['Int']>;
  elitePickCount?: Maybe<Scalars['Int']>;
  eliteWinCount?: Maybe<Scalars['Int']>;
  encounterId?: Maybe<Ti2020CustomGameDepthListEncounterType>;
  matchCount?: Maybe<Scalars['Int']>;
  pickCount?: Maybe<Scalars['Int']>;
  winCount?: Maybe<Scalars['Int']>;
};

export enum TableCalculateEnum {
  Average = 'AVERAGE',
  Median = 'MEDIAN',
  Highest = 'HIGHEST',
  Lowest = 'LOWEST'
}

export type TeamMatchesRequestType = {
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: Maybe<Scalars['Long']>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: Maybe<Scalars['Int']>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: Maybe<Scalars['Long']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: Maybe<Scalars['Boolean']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: Maybe<Scalars['Long']>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: Maybe<Scalars['Long']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: Maybe<Scalars['Boolean']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: Maybe<Scalars['Boolean']>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: Maybe<Scalars['Boolean']>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip: Scalars['Int'];
  /** The amount of matches to have returned in your query. Max 1000 */
  take: Scalars['Int'];
};

export type TeamType = {
  __typename?: 'TeamType';
  bannerLogo?: Maybe<Scalars['String']>;
  baseLogo?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Long']>;
  id: Scalars['Int'];
  isLocked?: Maybe<Scalars['Boolean']>;
  isPro?: Maybe<Scalars['Boolean']>;
  lastMatchDateTime?: Maybe<Scalars['Long']>;
  logo?: Maybe<Scalars['String']>;
  lossCount?: Maybe<Scalars['Int']>;
  /** Find match details by leauge id. leaugeId is a required input field. */
  matches?: Maybe<Array<Maybe<MatchType>>>;
  name?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  winCount?: Maybe<Scalars['Int']>;
};


export type TeamTypeMatchesArgs = {
  request: TeamMatchesRequestType;
};

export enum Ti2020CustomGameDepthListAscensionAbilitiesType {
  AscensionArmor = 'ASCENSION_ARMOR',
  AscensionArmorSapping = 'ASCENSION_ARMOR_SAPPING',
  AscensionAttackSpeed = 'ASCENSION_ATTACK_SPEED',
  AscensionBomb = 'ASCENSION_BOMB',
  AscensionChillingTouch = 'ASCENSION_CHILLING_TOUCH',
  AscensionCrit = 'ASCENSION_CRIT',
  AscensionDamage = 'ASCENSION_DAMAGE',
  AscensionDrunken = 'ASCENSION_DRUNKEN',
  AscensionExtraFast = 'ASCENSION_EXTRA_FAST',
  AscensionFlicker = 'ASCENSION_FLICKER',
  AscensionHealSuppression = 'ASCENSION_HEAL_SUPPRESSION',
  AscensionMagicImmunity = 'ASCENSION_MAGIC_IMMUNITY',
  AscensionMagicResist = 'ASCENSION_MAGIC_RESIST',
  AscensionVampiric = 'ASCENSION_VAMPIRIC',
  AscensionMagneticField = 'ASCENSION_MAGNETIC_FIELD',
  AscensionSilence = 'ASCENSION_SILENCE',
  AscensionFirefly = 'ASCENSION_FIREFLY'
}

export enum Ti2020CustomGameDepthListEncounterType {
  EncounterEmptyCavern = 'ENCOUNTER_EMPTY_CAVERN',
  EncounterEmptyBeach = 'ENCOUNTER_EMPTY_BEACH',
  EncounterBrewmaster = 'ENCOUNTER_BREWMASTER',
  EncounterHellbearsPortalV_3 = 'ENCOUNTER_HELLBEARS_PORTAL_V_3',
  EncounterPinecones = 'ENCOUNTER_PINECONES',
  EncounterQuillBeasts = 'ENCOUNTER_QUILL_BEASTS',
  EncounterJungleHijinx = 'ENCOUNTER_JUNGLE_HIJINX',
  EncounterTuskSkeletons = 'ENCOUNTER_TUSK_SKELETONS',
  EncounterBombers = 'ENCOUNTER_BOMBERS',
  EncounterDrowRangerMiniboss = 'ENCOUNTER_DROW_RANGER_MINIBOSS',
  EncounterWaveBlasters = 'ENCOUNTER_WAVE_BLASTERS',
  EncounterBabyOgres = 'ENCOUNTER_BABY_OGRES',
  EncounterMorphlingsB = 'ENCOUNTER_MORPHLINGS_B',
  EncounterZealotScarabs = 'ENCOUNTER_ZEALOT_SCARABS',
  EncounterOgreSeals = 'ENCOUNTER_OGRE_SEALS',
  EncounterWarlocks = 'ENCOUNTER_WARLOCKS',
  EncounterGauntlet = 'ENCOUNTER_GAUNTLET',
  EncounterMortyTransition = 'ENCOUNTER_MORTY_TRANSITION',
  EncounterPenguinsTransition = 'ENCOUNTER_PENGUINS_TRANSITION',
  EncounterMirana = 'ENCOUNTER_MIRANA',
  EncounterMushroomMines = 'ENCOUNTER_MUSHROOM_MINES',
  EncounterLegionCommander = 'ENCOUNTER_LEGION_COMMANDER',
  EncounterTrollWarlord = 'ENCOUNTER_TROLL_WARLORD',
  EncounterPudgeMiniboss = 'ENCOUNTER_PUDGE_MINIBOSS',
  EncounterPucks = 'ENCOUNTER_PUCKS',
  EncounterDarkSeer = 'ENCOUNTER_DARK_SEER',
  EncounterSpectres = 'ENCOUNTER_SPECTRES',
  EncounterShadowDemons = 'ENCOUNTER_SHADOW_DEMONS',
  EncounterNagaSiren = 'ENCOUNTER_NAGA_SIREN',
  EncounterDireSiege = 'ENCOUNTER_DIRE_SIEGE',
  EncounterBigOgres = 'ENCOUNTER_BIG_OGRES',
  EncounterDragonKnight = 'ENCOUNTER_DRAGON_KNIGHT',
  EncounterKunkkaTide = 'ENCOUNTER_KUNKKA_TIDE',
  EncounterAlchemist = 'ENCOUNTER_ALCHEMIST',
  EncounterEnragedWildwings = 'ENCOUNTER_ENRAGED_WILDWINGS',
  EncounterElementalTiny = 'ENCOUNTER_ELEMENTAL_TINY',
  EncounterBandits = 'ENCOUNTER_BANDITS',
  EncounterBombSquad = 'ENCOUNTER_BOMB_SQUAD',
  EncounterUndeadWoods = 'ENCOUNTER_UNDEAD_WOODS',
  EncounterPhoenix = 'ENCOUNTER_PHOENIX',
  EncounterBroodmothers = 'ENCOUNTER_BROODMOTHERS',
  EncounterFireRoshan = 'ENCOUNTER_FIRE_ROSHAN',
  EncounterBossVisage = 'ENCOUNTER_BOSS_VISAGE',
  EncounterBossTimbersaw = 'ENCOUNTER_BOSS_TIMBERSAW',
  EncounterTempleGuardians = 'ENCOUNTER_TEMPLE_GUARDIANS',
  EncounterStoregga = 'ENCOUNTER_STOREGGA',
  EncounterBossVoidSpirit = 'ENCOUNTER_BOSS_VOID_SPIRIT',
  EncounterAghanim = 'ENCOUNTER_AGHANIM',
  EncounterJungleFireMaze = 'ENCOUNTER_JUNGLE_FIRE_MAZE',
  EncounterCliffPass = 'ENCOUNTER_CLIFF_PASS',
  EncounterHellfireCanyon = 'ENCOUNTER_HELLFIRE_CANYON',
  EncounterTempleGarden = 'ENCOUNTER_TEMPLE_GARDEN',
  EncounterCastleTraps = 'ENCOUNTER_CASTLE_TRAPS',
  EncounterCryptTraps = 'ENCOUNTER_CRYPT_TRAPS',
  EncounterBonusChicken = 'ENCOUNTER_BONUS_CHICKEN',
  EncounterPangolier = 'ENCOUNTER_PANGOLIER',
  EncounterRockGolems = 'ENCOUNTER_ROCK_GOLEMS'
}

export enum Ti2020CustomGameDepthListRewardType {
  RewardTypeNone = 'REWARD_TYPE_NONE',
  RewardTypeGold = 'REWARD_TYPE_GOLD',
  RewardTypeExtraLives = 'REWARD_TYPE_EXTRA_LIVES',
  RewardTypeTreasure = 'REWARD_TYPE_TREASURE'
}

export enum Ti2020CustomGameMatchDifficultyType {
  Apprentice = 'APPRENTICE',
  Magician = 'MAGICIAN',
  Sorcerer = 'SORCERER',
  Grandmagus = 'GRANDMAGUS',
  Apexmage = 'APEXMAGE'
}

export enum Ti2020CustomGamePlayerBlessingType {
  ModifierBlessingAgility = 'MODIFIER_BLESSING_AGILITY',
  ModifierBlessingArmor = 'MODIFIER_BLESSING_ARMOR',
  ModifierBlessingAttackSpeed = 'MODIFIER_BLESSING_ATTACK_SPEED',
  ModifierBlessingBase = 'MODIFIER_BLESSING_BASE',
  ModifierBlessingBookAgility = 'MODIFIER_BLESSING_BOOK_AGILITY',
  ModifierBlessingBookIntelligence = 'MODIFIER_BLESSING_BOOK_INTELLIGENCE',
  ModifierBlessingBookStrength = 'MODIFIER_BLESSING_BOOK_STRENGTH',
  ModifierBlessingBottleUpgrade = 'MODIFIER_BLESSING_BOTTLE_UPGRADE',
  ModifierBlessingDamageBonus = 'MODIFIER_BLESSING_DAMAGE_BONUS',
  ModifierBlessingDamageReflect = 'MODIFIER_BLESSING_DAMAGE_REFLECT',
  ModifierBlessingDetonation = 'MODIFIER_BLESSING_DETONATION',
  ModifierBlessingEvasion = 'MODIFIER_BLESSING_EVASION',
  ModifierBlessingHealthBoost = 'MODIFIER_BLESSING_HEALTH_BOOST',
  ModifierBlessingIntelligence = 'MODIFIER_BLESSING_INTELLIGENCE',
  ModifierBlessingLifeSteal = 'MODIFIER_BLESSING_LIFE_STEAL',
  ModifierBlessingMagicDamageBonus = 'MODIFIER_BLESSING_MAGIC_DAMAGE_BONUS',
  ModifierBlessingMagicResist = 'MODIFIER_BLESSING_MAGIC_RESIST',
  ModifierBlessingManaBoost = 'MODIFIER_BLESSING_MANA_BOOST',
  ModifierBlessingMovementSpeed = 'MODIFIER_BLESSING_MOVEMENT_SPEED',
  ModifierBlessingPotionArcanist = 'MODIFIER_BLESSING_POTION_ARCANIST',
  ModifierBlessingPotionDragon = 'MODIFIER_BLESSING_POTION_DRAGON',
  ModifierBlessingPotionEchoSlam = 'MODIFIER_BLESSING_POTION_ECHO_SLAM',
  ModifierBlessingPotionHealth = 'MODIFIER_BLESSING_POTION_HEALTH',
  ModifierBlessingPotionMana = 'MODIFIER_BLESSING_POTION_MANA',
  ModifierBlessingPotionPurification = 'MODIFIER_BLESSING_POTION_PURIFICATION',
  ModifierBlessingPotionRavage = 'MODIFIER_BLESSING_POTION_RAVAGE',
  ModifierBlessingPotionShadowWave = 'MODIFIER_BLESSING_POTION_SHADOW_WAVE',
  ModifierBlessingPotionTorrent = 'MODIFIER_BLESSING_POTION_TORRENT',
  ModifierBlessingRefresherShard = 'MODIFIER_BLESSING_REFRESHER_SHARD',
  ModifierBlessingRespawnInvulnerability = 'MODIFIER_BLESSING_RESPAWN_INVULNERABILITY',
  ModifierBlessingRespawnTimeReduction = 'MODIFIER_BLESSING_RESPAWN_TIME_REDUCTION',
  ModifierBlessingRestoreMana = 'MODIFIER_BLESSING_RESTORE_MANA',
  ModifierBlessingSpellLifeSteal = 'MODIFIER_BLESSING_SPELL_LIFE_STEAL',
  ModifierBlessingStrength = 'MODIFIER_BLESSING_STRENGTH'
}

export type TopPlayersByHeroType = {
  __typename?: 'TopPlayersByHeroType';
  heroId?: Maybe<Scalars['Short']>;
  players?: Maybe<Array<Maybe<PlayerLeaderBoardByHeroType>>>;
};

export type TotalMatchCountType = {
  __typename?: 'TotalMatchCountType';
  matchCount?: Maybe<Scalars['Long']>;
};

export type TotalPlayerCountType = {
  __typename?: 'TotalPlayerCountType';
  playerCount?: Maybe<Scalars['Long']>;
};

export type TowerDamageDetailType = {
  __typename?: 'TowerDamageDetailType';
  attacker?: Maybe<Scalars['Short']>;
  byAbility?: Maybe<Scalars['Short']>;
  byItem?: Maybe<Scalars['Short']>;
  damage: Scalars['Int'];
  npcId?: Maybe<Scalars['Short']>;
  time: Scalars['Int'];
};

export type TwitchTrackerPlayerHeroType = {
  __typename?: 'TwitchTrackerPlayerHeroType';
  heroId: Scalars['Int'];
  matchCount: Scalars['Int'];
  winCount: Scalars['Int'];
};

export type TwitchTrackerPlayerMatchType = {
  __typename?: 'TwitchTrackerPlayerMatchType';
  assistCount?: Maybe<Scalars['Short']>;
  award?: Maybe<MatchPlayerAward>;
  deathCount?: Maybe<Scalars['Short']>;
  endDateTime?: Maybe<Scalars['Long']>;
  heroId: Scalars['Int'];
  isVictory: Scalars['Boolean'];
  killCount?: Maybe<Scalars['Short']>;
  lane?: Maybe<MatchLaneType>;
  matchId?: Maybe<Scalars['Long']>;
  position?: Maybe<MatchPlayerPositionType>;
  role?: Maybe<MatchPlayerRoleType>;
};

export type TwitchTrackerPlayerType = {
  __typename?: 'TwitchTrackerPlayerType';
  activity?: Maybe<PlayerBehaviorActivity>;
  avatar?: Maybe<Scalars['String']>;
  coreCountLast100: Scalars['Int'];
  leaderboardRank?: Maybe<Scalars['Int']>;
  matchCountLast100: Scalars['Int'];
  matches?: Maybe<Array<Maybe<TwitchTrackerPlayerMatchType>>>;
  name?: Maybe<Scalars['String']>;
  proPlayerName?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  steamAccountId?: Maybe<Scalars['Long']>;
  topHeroLast100?: Maybe<Array<Maybe<TwitchTrackerPlayerHeroType>>>;
  uniqueHeroLast100: Scalars['Int'];
  winCountLast100: Scalars['Int'];
};


export type UpdateFollowerRequestType = {
  feedLevel?: Maybe<Scalars['Byte']>;
  emailLevel?: Maybe<Scalars['Byte']>;
  dailyEmail?: Maybe<Scalars['Boolean']>;
  weeklyEmail?: Maybe<Scalars['Boolean']>;
  monthlyEmail?: Maybe<Scalars['Boolean']>;
  overrideAllUsers: Scalars['Boolean'];
};

export type UpdateMatchReplayUploadObjectType = {
  matchReplayUploadTeamId: Scalars['Int'];
  matchId?: Maybe<Scalars['Long']>;
  leagueId?: Maybe<Scalars['Int']>;
  radiantTeamId?: Maybe<Scalars['Int']>;
  direTeamId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UserHomepageType = {
  __typename?: 'UserHomepageType';
  activeLeagueGames?: Maybe<Array<Maybe<MatchLiveType>>>;
  /** A list of blog components to be displayed separately on the homepage. */
  blogs?: Maybe<Array<Maybe<BlogType>>>;
  inProgressLeagues?: Maybe<Array<Maybe<LeagueType>>>;
  leagueMetas?: Maybe<Array<Maybe<LeagueMetaType>>>;
  matchAwards?: Maybe<Array<Maybe<MatchType>>>;
  recentHighImps?: Maybe<Array<Maybe<RecentHighImpType>>>;
  recentMatches?: Maybe<Array<Maybe<MatchPlayerType>>>;
  recentRampages?: Maybe<Array<Maybe<RecentRampageType>>>;
  recentWinStreaks?: Maybe<Array<Maybe<RecentWinStreakType>>>;
  topLiveGames?: Maybe<Array<Maybe<MatchLiveType>>>;
  topPlayersByHeroType?: Maybe<Array<Maybe<TopPlayersByHeroType>>>;
  topProPlayers?: Maybe<Array<Maybe<ProPlayerFollowType>>>;
  topSynergiesByHero?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  totalComponents?: Maybe<Scalars['Int']>;
  upcomingLeagues?: Maybe<Array<Maybe<LeagueType>>>;
};


export type UserHomepageTypeActiveLeagueGamesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserHomepageTypeBlogsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  excludedBlogIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type UserHomepageTypeInProgressLeaguesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  excludedLeagueIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  includedLeagueIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  includedLeagueTierIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type UserHomepageTypeLeagueMetasArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  excludedLeagueIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  includedLeagueIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  includedLeagueTierIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type UserHomepageTypeMatchAwardsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  matchPlayerAwardTypeIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
};


export type UserHomepageTypeRecentHighImpsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserHomepageTypeRecentMatchesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserHomepageTypeRecentRampagesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserHomepageTypeRecentWinStreaksArgs = {
  take?: Maybe<Scalars['Int']>;
};


export type UserHomepageTypeTopLiveGamesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserHomepageTypeTopPlayersByHeroTypeArgs = {
  heroComponentsTake?: Maybe<Scalars['Int']>;
  playersTake?: Maybe<Scalars['Int']>;
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
  rankBracketIds?: Maybe<Array<Maybe<Scalars['Byte']>>>;
};


export type UserHomepageTypeTopProPlayersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserHomepageTypeTopSynergiesByHeroArgs = {
  synergyComponentsTake?: Maybe<Scalars['Int']>;
  heroIds?: Maybe<Array<Maybe<Scalars['Short']>>>;
};


export type UserHomepageTypeUpcomingLeaguesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  excludedLeagueIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  includedLeagueIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  includedLeagueTierIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  /** Gets a list of completed tutorials from the logged in user. */
  completedTutorials?: Maybe<Array<Maybe<Scalars['Short']>>>;
  /** Returns a list of feed events for the logged in user. */
  feed?: Maybe<FeedResponseType>;
  /** Gets the list of followers the person is following. */
  followers?: Maybe<Array<Maybe<FollowerType>>>;
  /** Gets the list of followers the person is following. */
  following?: Maybe<Array<Maybe<FollowerType>>>;
  /** Find a list of components to display on the home page. */
  homepage?: Maybe<UserHomepageType>;
  /** Find user details of the currently logged in user. */
  profile?: Maybe<UserType>;
};


export type UserQueryFeedArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type UserQueryHomepageArgs = {
  take: Scalars['Int'];
};

export type UserType = {
  __typename?: 'UserType';
  followerCount?: Maybe<Scalars['Int']>;
  followingCount?: Maybe<Scalars['Int']>;
  followingLeagueCount?: Maybe<Scalars['Int']>;
  followingTeamCount?: Maybe<Scalars['Int']>;
  profile?: Maybe<CaptainJackIdentityPrivateProfileType>;
  recentMatch?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type VendorQuery = {
  __typename?: 'VendorQuery';
  dotaNext?: Maybe<DotaNextQuery>;
  /** Used by the Dota 2 Twitch Tracker for Dota Stats */
  twitchTracker?: Maybe<TwitchTrackerPlayerType>;
};


export type VendorQueryTwitchTrackerArgs = {
  steamAccountId: Scalars['Long'];
};

export enum XpReason {
  Other = 'OTHER',
  Heroes = 'HEROES',
  Creeps = 'CREEPS',
  Roshan = 'ROSHAN',
  TomeOfKnowledge = 'TOME_OF_KNOWLEDGE',
  Outposts = 'OUTPOSTS'
}

export type YogurtMutation = {
  __typename?: 'YogurtMutation';
  /** Add a member to a match replay upload team. steamAccountId and matchReplayUploadTeamId are required input fields. */
  addTeamMember?: Maybe<Scalars['Boolean']>;
  /** Create a new match replay upload team. teamName, emailAddress, and teamId are required input fields. */
  createTeam?: Maybe<MatchReplayUploadTeamType>;
  /** Import a public match as a match replay upload to the match replay upload team's data set. matchReplayUploadTeamId and matchId are required input fields. */
  importMatch?: Maybe<Scalars['Boolean']>;
  /** Invalidate the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  invalidate?: Maybe<Scalars['Boolean']>;
  /** Link the all input matches with the same series id. If more than one match has a series id, this call will fail. If all matches do not have a series id, one is generated. matchReplayUploadTeamId and matchIds are required input fields. */
  linkSeriesId?: Maybe<Scalars['Boolean']>;
  /** Remove the series id for all of the input matches. matchReplayUploadTeamId and matchIds are required input fields. */
  removeSeriesId?: Maybe<Scalars['Boolean']>;
  /** Remove a member of a match replay upload team. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  removeTeamMember?: Maybe<Scalars['Boolean']>;
  /** Set the default team of a match replay upload team member. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  setTeamMemberDefaultTeam?: Maybe<Scalars['Boolean']>;
  /** Update the data of a match replay upload. updateMatchReplayUploadObject is a required input field. */
  update?: Maybe<Scalars['Boolean']>;
  /** Update a new match replay upload team. matchReplayUploadTeamId is a required input field. */
  updateTeam?: Maybe<Scalars['Boolean']>;
  /** Update a member of a match replay upload team. memberCaptainJackIdentityId, matchReplayUploadTeamId, and isAdmin are required input fields. */
  updateTeamMember?: Maybe<Scalars['Boolean']>;
  /** Validate the data of a match replay upload, adding the match replay upload to the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  validate?: Maybe<Scalars['Boolean']>;
};


export type YogurtMutationAddTeamMemberArgs = {
  steamAccountId: Scalars['Int'];
  matchReplayUploadTeamId: Scalars['Int'];
};


export type YogurtMutationCreateTeamArgs = {
  matchReplayUploadTeamName: Scalars['String'];
  emailAddress: Scalars['String'];
  teamId: Scalars['Int'];
};


export type YogurtMutationImportMatchArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  matchId: Scalars['Int'];
};


export type YogurtMutationInvalidateArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  matchId: Scalars['Int'];
};


export type YogurtMutationLinkSeriesIdArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  matchIds: Array<Maybe<Scalars['Int']>>;
};


export type YogurtMutationRemoveSeriesIdArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  matchIds: Array<Maybe<Scalars['Int']>>;
};


export type YogurtMutationRemoveTeamMemberArgs = {
  captainJackIdentityId: Scalars['ID'];
  matchReplayUploadTeamId: Scalars['Int'];
};


export type YogurtMutationSetTeamMemberDefaultTeamArgs = {
  captainJackIdentityId: Scalars['ID'];
  matchReplayUploadTeamId: Scalars['Int'];
};


export type YogurtMutationUpdateArgs = {
  updateMatchReplayUploadObject: UpdateMatchReplayUploadObjectType;
};


export type YogurtMutationUpdateTeamArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  matchReplayUploadTeamName?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
};


export type YogurtMutationUpdateTeamMemberArgs = {
  captainJackIdentityId: Scalars['ID'];
  matchReplayUploadTeamId: Scalars['Int'];
  isAdmin: Scalars['Boolean'];
};


export type YogurtMutationValidateArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  matchId: Scalars['Int'];
};

export type YogurtQuery = {
  __typename?: 'YogurtQuery';
  /** Find the defualt match replay upload team associated with the currently logged in user. */
  defaultTeam?: Maybe<MatchReplayUploadTeamType>;
  /** Find the list of Hero's in the game and determine basic output by grouping them together. */
  heroSummary?: Maybe<Array<Maybe<MatchReplayUploadHeroSummaryType>>>;
  /** Find match replay uploads by match replay upload team id. matchReplayUploadTeamId and request are required input fields. */
  overview?: Maybe<MatchReplayUploadOverviewType>;
  /** Find a match replay upload team by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  team?: Maybe<MatchReplayUploadTeamType>;
  /** Find match replay upload team members by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  teamMembers?: Maybe<Array<Maybe<MatchReplayUploadTeamMemberType>>>;
  /** Find all match replay upload teams associated with the currently logged in user. */
  teams?: Maybe<Array<Maybe<MatchReplayUploadTeamType>>>;
};


export type YogurtQueryHeroSummaryArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  request?: Maybe<FilterMatchReplayUploadRequestType>;
};


export type YogurtQueryOverviewArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
  request?: Maybe<FilterMatchReplayUploadRequestType>;
};


export type YogurtQueryTeamArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
};


export type YogurtQueryTeamMembersArgs = {
  matchReplayUploadTeamId: Scalars['Int'];
};

export type GetMatchQueryVariables = Exact<{
  matchId: Scalars['Long'];
}>;


export type GetMatchQuery = (
  { __typename?: 'DotaQuery' }
  & { match?: Maybe<(
    { __typename?: 'MatchType' }
    & { players?: Maybe<Array<Maybe<(
      { __typename?: 'MatchPlayerType' }
      & Pick<MatchPlayerType, 'isVictory' | 'isRadiant' | 'role' | 'lane' | 'kills' | 'deaths' | 'assists' | 'goldPerMinute' | 'experiencePerMinute'>
      & { hero?: Maybe<(
        { __typename?: 'HeroType' }
        & Pick<HeroType, 'displayName' | 'shortName'>
      )>, steamAccount?: Maybe<(
        { __typename?: 'SteamAccountType' }
        & Pick<SteamAccountType, 'id' | 'name'>
      )> }
    )>>> }
  )> }
);

export type GetMatchesQueryVariables = Exact<{
  matchIds: Array<Maybe<Scalars['Long']>> | Maybe<Scalars['Long']>;
}>;


export type GetMatchesQuery = (
  { __typename?: 'DotaQuery' }
  & { matches?: Maybe<Array<Maybe<(
    { __typename?: 'MatchType' }
    & Pick<MatchType, 'didRadiantWin' | 'statsDateTime' | 'endDateTime'>
    & { players?: Maybe<Array<Maybe<(
      { __typename?: 'MatchPlayerType' }
      & Pick<MatchPlayerType, 'isRadiant'>
      & { hero?: Maybe<(
        { __typename?: 'HeroType' }
        & Pick<HeroType, 'displayName' | 'name'>
      )> }
    )>>> }
  )>>> }
);
