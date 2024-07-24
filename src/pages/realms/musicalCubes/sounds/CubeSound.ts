import vocals_Am from './vocals/AHA_SV_60_vocal_loop_in_the_city_6-8_Am.wav';

import piano_Am from './piano/AHA_SV_60_piano_loop_in_the_city_6-8_Am.wav';
import brass_Am from './brass/AHA_SV_60_brass_stack_loop_in_the_city_6-8_Am.wav';
import guitar_Am from './guitar/AHA_SV_60_guitar_stack_loop_in_the_city_6-8_Am.wav';

import brass_OneShot_Am from './one_shots/AHA_SV_brass_stack_one_shot_stab_choo_choo_Am.wav';
import brass_OneShotBump_Am from './one_shots/AHA_SV_melody_stack_one_shot_stab_bump_Am.wav';
import sub_Am from './one_shots/SNS_SF_808_sub_comp_Am.wav';

export enum InTheCity {
  Piano = piano_Am,
  Brass = brass_Am, 
  Guitar = guitar_Am,

  Brass_Choo_Choo = brass_OneShot_Am,
  Brass_Stab_Bump = brass_OneShotBump_Am,
  Sub = sub_Am,

  Vocals = vocals_Am
}